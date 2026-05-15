import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { User } from '../models/User.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();
const TOKEN_EXPIRY = process.env.JWT_EXPIRES_IN || '7d';
const EMAIL_TOKEN_TTL_MS = Number(process.env.EMAIL_VERIFY_TOKEN_TTL_MS || 24 * 60 * 60 * 1000);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,72}$/;

const normalizeEmail = (value = '') => value.trim().toLowerCase();
const normalizeName = (value = '') => value.trim();
const normalizePhone = (value = '') => value.trim();
const hashVerificationToken = (token) => crypto.createHash('sha256').update(token).digest('hex');

const getAppOrigin = () => {
    if (process.env.APP_URL && process.env.APP_URL.trim()) {
        return process.env.APP_URL.trim();
    }

    return 'http://localhost:3000';
};

const buildVerificationLink = (token) => `${getAppOrigin()}/verify-email?token=${encodeURIComponent(token)}`;

const createMailerTransport = () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return null;
    }

    if (process.env.EMAIL_HOST) {
        const port = Number(process.env.EMAIL_PORT || 465);
        const secure = String(process.env.EMAIL_SECURE || 'true').toLowerCase() !== 'false';

        return nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port,
            secure,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    if (!process.env.EMAIL_SERVICE) {
        return null;
    }

    return nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
};

const sendVerificationEmail = async ({ toEmail, fullName, verificationLink }) => {
    const transporter = createMailerTransport();

    if (!transporter) {
        throw new Error('Email service is not configured');
    }

    await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: toEmail,
        subject: 'Verify your Good Luck Foods account',
        text: `Hi ${fullName},\n\nPlease verify your account by clicking this link:\n${verificationLink}\n\nThis link will expire in 24 hours.\n\nIf you did not create this account, you can ignore this email.`,
        html: `
            <p>Hi ${fullName},</p>
            <p>Please verify your account by clicking the link below:</p>
            <p><a href="${verificationLink}">Verify Email</a></p>
            <p>This link will expire in 24 hours.</p>
            <p>If you did not create this account, you can ignore this email.</p>
        `,
    });
};

const setVerificationTokenForUser = (user) => {
    const verificationToken = crypto.randomBytes(32).toString('hex');
    user.verificationTokenHash = hashVerificationToken(verificationToken);
    user.verificationTokenExpiresAt = new Date(Date.now() + EMAIL_TOKEN_TTL_MS);
    return verificationToken;
};

const getPasswordValidationErrors = (password = '') => {
    const errors = [];

    if (password.length < 8 || password.length > 72) {
        errors.push('Password must be between 8 and 72 characters');
    }

    if (!/[A-Z]/.test(password)) {
        errors.push('Password must include at least one uppercase letter');
    }

    if (!/[a-z]/.test(password)) {
        errors.push('Password must include at least one lowercase letter');
    }

    if (!/\d/.test(password)) {
        errors.push('Password must include at least one number');
    }

    if (!/[^A-Za-z\d]/.test(password)) {
        errors.push('Password must include at least one special character');
    }

    if (errors.length === 0 && !strongPasswordRegex.test(password)) {
        errors.push('Password format is invalid');
    }

    return errors;
};

const validateSignupInput = ({ fullName, companyName, email, phone, password }) => {
    const errors = [];

    if (!fullName || fullName.trim().length < 2) {
        errors.push('Full name must be at least 2 characters');
    }

    if (!companyName || companyName.trim().length < 2) {
        errors.push('Company name must be at least 2 characters');
    }

    if (!email || !emailRegex.test(normalizeEmail(email))) {
        errors.push('Please provide a valid email address');
    }

    if (!phone || phone.trim().length < 7) {
        errors.push('Please provide a valid phone number');
    }

    errors.push(...getPasswordValidationErrors(password || ''));

    return errors;
};

const validateLoginInput = ({ email, password }) => {
    if (!email || !emailRegex.test(normalizeEmail(email))) {
        return 'Please provide a valid email address';
    }

    if (!password || password.length < 8) {
        return 'Invalid credentials';
    }

    return null;
};

const signJwt = (payload) => new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: TOKEN_EXPIRY }, (err, token) => {
        if (err) {
            return reject(err);
        }

        resolve(token);
    });
});

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', async (req, res) => {
    const { fullName, companyName, email, phone, password } = req.body;
    const validationErrors = validateSignupInput({ fullName, companyName, email, phone, password });

    if (validationErrors.length > 0) {
        return res.status(400).json({ msg: validationErrors[0], errors: validationErrors });
    }

    const normalizedEmail = normalizeEmail(email);

    try {
        let user = await User.findOne({ email: normalizedEmail });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const verificationToken = setVerificationTokenForUser(user = new User({
            fullName: normalizeName(fullName),
            companyName: normalizeName(companyName),
            email: normalizedEmail,
            phone: normalizePhone(phone),
            password,
            isVerified: false,
        }));

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const verificationLink = buildVerificationLink(verificationToken);

        let emailSent = false;

        try {
            await sendVerificationEmail({
                toEmail: user.email,
                fullName: user.fullName,
                verificationLink,
            });
            emailSent = true;
        } catch (emailError) {
            console.error('Failed to send verification email:', emailError.message);

            if (process.env.NODE_ENV === 'production') {
                await User.deleteOne({ _id: user.id });
                return res.status(500).json({ msg: 'Could not send verification email. Please try again.' });
            }
        }

        return res.status(201).json({
            msg: emailSent
                ? 'Signup successful. Please verify your email before logging in.'
                : 'Signup successful, but verification email could not be sent. Use the verification link below.',
            emailSent,
            ...(process.env.NODE_ENV !== 'production' ? { verificationLink } : {}),
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Server error' });
    }
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const validationError = validateLoginInput({ email, password });

    if (validationError) {
        return res.status(400).json({ msg: validationError });
    }

    const normalizedEmail = normalizeEmail(email);

    try {
        let user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        if (!user.isVerified) {
            return res.status(403).json({ msg: 'Please verify your email before logging in' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        const token = await signJwt(payload);
        return res.json({ token });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Server error' });
    }
});

// @route   POST api/auth/resend-verification
// @desc    Resend verification email
// @access  Public
router.post('/resend-verification', async (req, res) => {
    const normalizedEmail = normalizeEmail(req.body?.email || '');

    if (!emailRegex.test(normalizedEmail)) {
        return res.status(400).json({ msg: 'Please provide a valid email address' });
    }

    try {
        const user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        if (user.isVerified) {
            return res.status(400).json({ msg: 'Email is already verified' });
        }

        const verificationToken = setVerificationTokenForUser(user);
        await user.save();

        const verificationLink = buildVerificationLink(verificationToken);

        try {
            await sendVerificationEmail({
                toEmail: user.email,
                fullName: user.fullName,
                verificationLink,
            });

            return res.json({
                msg: 'Verification email sent successfully.',
                emailSent: true,
                ...(process.env.NODE_ENV !== 'production' ? { verificationLink } : {}),
            });
        } catch (emailError) {
            console.error('Failed to resend verification email:', emailError.message);
            return res.status(500).json({
                msg: 'Could not send verification email.',
                emailSent: false,
                ...(process.env.NODE_ENV !== 'production' ? { verificationLink } : {}),
            });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Server error' });
    }
});

// @route   GET api/auth/verify-email
// @desc    Verify email using token
// @access  Public
router.get('/verify-email', async (req, res) => {
    const token = req.query.token;

    if (!token || typeof token !== 'string') {
        return res.status(400).json({ msg: 'Invalid verification link' });
    }

    try {
        const verificationTokenHash = hashVerificationToken(token);

        const user = await User.findOne({ verificationTokenHash });

        if (!user) {
            return res.status(400).json({
                msg: 'Verification link is invalid, expired, or already used. If you can log in, your email is already verified.',
            });
        }

        if (user.isVerified) {
            return res.json({ msg: 'Email is already verified. You can log in.' });
        }

        if (!user.verificationTokenExpiresAt || user.verificationTokenExpiresAt <= new Date()) {
            return res.status(400).json({ msg: 'Verification link has expired. Please request a new verification email.' });
        }

        user.isVerified = true;
        await user.save();

        return res.json({ msg: 'Email verified successfully. You can now log in.' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Server error' });
    }
});

// @route   GET api/auth/user
// @desc    Get logged in user
// @access  Private
router.get('/user', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth/forgot-password
// @desc    Simulate sending forgot password email
// @access  Public
router.post('/forgot-password', async (req, res) => {
    try {
        // In a real app, you would generate a token and email it to the user
        // For now, we just simulate a success response
        setTimeout(() => {
            res.json({ msg: 'Email sent' });
        }, 1000);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
