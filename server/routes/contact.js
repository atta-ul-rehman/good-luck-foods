import express from 'express';
import { Inquiry } from '../models/Inquiry.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// @route   POST api/contact
// @desc    Submit a new inquiry (vendor/quote)
// @access  Public
router.post('/', async (req, res) => {
    const { fullName, businessName, email, phone, category, message } = req.body;

    try {
        // 1. Send Email to Admin
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: process.env.EMAIL_SERVICE || 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: `"Good Luck Foods Site" <${process.env.EMAIL_USER}>`,
                to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
                subject: `New Inquiry from ${businessName}`,
                html: `
                    <h2>New Wholesale Inquiry</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Business:</strong> ${businessName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Category:</strong> ${category}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } else {
            console.log('Skipping email: EMAIL_USER or EMAIL_PASS not set in .env');
        }

        // 2. Save document to Database
        const newInquiry = new Inquiry({
            fullName,
            businessName,
            email,
            phone,
            category,
            message
        });

        const savedInquiry = await newInquiry.save();

        res.json(savedInquiry);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

export default router;
