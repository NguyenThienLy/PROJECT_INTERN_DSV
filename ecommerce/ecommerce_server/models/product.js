const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: [{ type: Schema.Types.ObjectId, ref: "Brand" }],
        default: []
    },
    color: {
        type: String,
        enum: ['#ff5f6d', 'rgba(255, 195, 113, 0.5)', 'rgba(95, 109, 255, 0.5)', 'rgba(255, 161, 95, 0.5)', 'rgba(61, 61, 63, 0.5)'],
        default: []
    },
    comment: {
        type: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
        default: []
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],
        default: []
    },
    subCategory: {
        type: Schema.Types.ObjectId, 
        ref: "SubCategory", 
        required: true
    },
    subImage: {
        type: [{ type: string}],
        default: []
    },
    mainImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 1,
        required: true
    },
    quantity: {
        type: Number, 
        default: 1,
        required: true
    },
    status: {
        type: String,
        enum: ['In-store', 'Out of stock'],
        default: 'In-store'
    },
    description: {
        type: String
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