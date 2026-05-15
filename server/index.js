import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import debugRoutes from './routes/debug.js';
import productRoutes from './routes/products.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

// In Vercel/serverless, env vars are validated by the platform configuration.
// Avoid killing the function at import time so the platform can surface a useful error.
const REQUIRED_ENV = ['MONGO_URI', 'JWT_SECRET'];
const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missing.length > 0) {
    console.error(`\n❌ Missing required environment variables: ${missing.join(', ')}`);
    console.error('   Set them in the Vercel project environment variables.\n');
}

const app = express();

const DEFAULT_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://www.goodluckfoods.co.uk',
    'https://goodluckfoods.co.uk',
];

const configuredOrigins = (process.env.CLIENT_ORIGIN || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

const allowedOrigins = [...new Set([...DEFAULT_ALLOWED_ORIGINS, ...configuredOrigins])];

const isAllowedDevOrigin = (origin) => /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
const isAllowedVercelPreviewOrigin = (origin) => /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin);
const allowVercelPreviewOrigins = String(process.env.ALLOW_VERCEL_PREVIEW_ORIGINS || 'true').toLowerCase() !== 'false';
const allowLocalDevOrigins = String(process.env.ALLOW_LOCALHOST_CORS || 'true').toLowerCase() !== 'false';

const isAllowedOrigin = (origin) => {
    if (!origin) {
        return true;
    }

    if (allowedOrigins.includes(origin)) {
        return true;
    }

    if (allowLocalDevOrigins && isAllowedDevOrigin(origin)) {
        return true;
    }

    if (allowVercelPreviewOrigins && isAllowedVercelPreviewOrigin(origin)) {
        return true;
    }

    return false;
};

// Lightweight hardening: hide framework signature and enforce basic browser protections.
app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    next();
});

// Init Middleware
app.use(express.json({ extended: false, limit: '100kb' }));
app.use(cors({
    origin: (origin, callback) => {
        if (isAllowedOrigin(origin)) {
            return callback(null, true);
        }

        // Return a non-throwing CORS denial to avoid 500 preflight responses.
        return callback(null, false);
    },
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        return res.status(500).json({ msg: 'Database connection failed' });
    }
});

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/debug', debugRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

if (!process.env.VERCEL) {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

export default app;
