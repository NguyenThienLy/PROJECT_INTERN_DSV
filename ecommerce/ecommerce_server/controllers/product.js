const model = require('../models/product');
const { ObjectId } = require('bson');

module.exports.getListFitler = async (params) => {
    const list = await model.find();

    return list;
};

module.exports.getList = async () => {
    const list = await model.find();

    return list;
};

module.exports.getItem = async (slug) => {
    const item = await model.findOne({ slug });

    return item;
};

module.exports.create = async (body) => {
    const item = await model.create(body);

    return item;
};

module.exports.update = async (id, body) => {
    const item = await model.findOneAndUpdate({ _id: new ObjectId(id) }, body, { new: true });

    return item;
};

module.exports.delete = async (id) => {
    const item = await model.findOne({ _id: new ObjectId(id) });
    await item.deleteOne({ _id: new ObjectId(id) });

    return item;
};