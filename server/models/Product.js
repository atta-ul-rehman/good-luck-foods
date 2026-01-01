import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    specs: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Product = mongoose.model('Product', productSchema);
