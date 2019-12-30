const Comment = require('../models/comment');
const { ObjectId } = require('bson');

module.exports.getList = async () => {
    const comments = await Comment.find();

    return comments;
};

module.exports.getItem = async (id) => {
    const comment = await Comment.findOne({ _id:new ObjectId(id) });

    return comment;
};

module.exports.create = async (body) => {
    const comment = await Comment.create(body);

    return comment;
};

module.exports.update = async (id, body) => {
    const comment = await Comment.findOneAndUpdate({ _id: new ObjectId(id) }, body, { new: true });

    return comment;
};

module.exports.delete = async (id) => {
    const comment = await Comment.findOne({ _id: new ObjectId(id) });
    await comment.deleteOne({ _id: new ObjectId(id) });

    return comment;
};