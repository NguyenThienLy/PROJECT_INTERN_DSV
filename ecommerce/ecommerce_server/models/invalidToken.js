const mongoose = require('mongoose');

const invalidTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
}, {
    collection: 'invalidToken'
});

module.exports = mongoose.model('InvalidToken', invalidTokenSchema);