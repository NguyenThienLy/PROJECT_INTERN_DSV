const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer", 
        required: true
    },
    star: {
        type: Number,
        default: 1
    },
    title: {
        type: String,
        required: true
    },
    content: {
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

module.exports = mongoose.model('Comment', commentSchema);