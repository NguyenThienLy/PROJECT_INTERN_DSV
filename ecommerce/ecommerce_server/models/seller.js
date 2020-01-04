const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String, 
        enum: ['active', 'deactive'], 
        default: 'active'
    },
    avatar: {
        type: String, 
        default: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
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
    collection: 'seller'
});

module.exports = mongoose.model('Seller', sellerSchema);