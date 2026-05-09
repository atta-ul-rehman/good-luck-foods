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

const configuredOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

const isAllowedDevOrigin = (origin) => /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);

const isAllowedOrigin = (origin) => {
    if (!origin) {
        return true;
    }

    if (configuredOrigins.includes(origin)) {
        return true;
    }

    if (isAllowedDevOrigin(origin)) {
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

// Connect Database
connectDB().catch((err) => {
    console.error('MongoDB connection failed:', err.message);
});

// Init Middleware
app.use(express.json({ extended: false, limit: '100kb' }));
app.use(cors({
    origin: (origin, callback) => {
        if (isAllowedOrigin(origin)) {
            return callback(null, true);
        }

        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
}));

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
