const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: [{ type: String }],
        enum: ['#ff5f6d', 'rgba(255, 195, 113, 0.5)', 'rgba(95, 109, 255, 0.5)', 'rgba(255, 161, 95, 0.5)', 'rgba(61, 61, 63, 0.5)'],
        default: []
    },
    comment: {
        type: [{ type: mongoose.Schema.Types.Object, ref: "Comment" }],
        default: []
    },
    size: {
        type: [{ type: String }],
        enum: ['S', 'M', 'L'],
        default: []
    },
    subImage: {
        type: [{ type: String }],
        default: []
    },
    mainImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['In-store', 'Out of stock'],
        default: 'In-store'
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);