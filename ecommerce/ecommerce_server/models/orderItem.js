const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: {
        type: String,
        ref: "Customer",
        required: true
    },
    quatity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
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

module.exports = mongoose.model('OrderItem', orderItemSchema);