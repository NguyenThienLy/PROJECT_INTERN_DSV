const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    color: {
        type: [{ type: Object }],
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
    soldQuantity: {
        type: Number,
        default: 0
    },
    rate: {
        type: Number,
        default: 1
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
}, {
    collection: 'product'
});

module.exports = mongoose.model('Product', productSchema);