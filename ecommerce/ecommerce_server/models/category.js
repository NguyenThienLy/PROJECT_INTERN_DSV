const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String, 
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
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