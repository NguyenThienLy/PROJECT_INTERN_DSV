const Category = require('../models/category');
const { ObjectId } = require('bson');

module.exports.getList = async () => {
    const categories = await Category.find();

    return categories;
};

module.exports.getItem = async (id) => {
    const category = await Category.findOne({ _id:new ObjectId(id) });

    return category;
};

module.exports.create = async (body) => {
    const category = await Category.create(body);

    return category;
};

module.exports.update = async (id, body) => {
    const category = await Category.findOneAndUpdate({ _id: new ObjectId(id) }, body, { new: true });

    return category;
};

module.exports.delete = async (id) => {
    const category = await Category.findOne({ _id: new ObjectId(id) });
    await category.deleteOne({ _id: new ObjectId(id) });

    return category;
};