import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending', // Pending, Contacted, Closed
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
