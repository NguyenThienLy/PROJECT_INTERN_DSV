const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    product: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
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
    collection: 'subCategory'
});

module.exports = mongoose.model('SubCategory', subCategorySchema);