const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subCategory: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" }],
        default: []
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
    collection: 'category'
});

module.exports = mongoose.model('Category', categorySchema);