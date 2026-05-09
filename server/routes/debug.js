import express from 'express';
import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Product } from '../models/Product.js';

const router = express.Router();

router.get('/ping', async (req, res) => {
    res.json({
        ok: true,
        dbReadyState: mongoose.connection.readyState,
        dbConnected: mongoose.connection.readyState === 1,
    });
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select('fullName companyName email phone isVerified createdAt');

        const count = await User.countDocuments();

        return res.json({
            ok: true,
            count,
            users,
        });
    } catch (err) {
        console.error('Debug users route error:', err.message);
        return res.status(500).json({ msg: 'Server error', error: err.message });
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select('categoryId name description image createdAt');

        const count = await Product.countDocuments();

        return res.json({
            ok: true,
            count,
            products,
        });
    } catch (err) {
        console.error('Debug products route error:', err.message);
        return res.status(500).json({ msg: 'Server error', error: err.message });
    }
});

export default router;