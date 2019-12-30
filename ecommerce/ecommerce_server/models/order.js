const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderCode: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        type: String,
        ref: "Customer",
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    orderItem: {
        type: [{ type: Schema.Types.ObjectId, ref: "OrderItem" }],
        default: []
    },
    status: {
        type: String,
        enum: ['completed', 'pending', 'canceled'],
        default: 'pending'
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

module.exports = mongoose.model('Order', orderSchema);