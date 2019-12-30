const Brand = require('../models/brand');
const { ObjectId } = require('bson');

module.exports.getList = async () => {
    const brands = await Brand.find();

    return brands;
};

module.exports.getItem = async (id) => {
    const brand = await Brand.findOne({ _id:new ObjectId(id) });

    return brand;
};

module.exports.create = async (body) => {
    const brand = await Brand.create(body);

    return brand;
};

module.exports.update = async (id, body) => {
    const brand = await Brand.findOneAndUpdate({ _id: new ObjectId(id) }, body, { new: true });

    return brand;
};

module.exports.delete = async (id) => {
    const brand = await Brand.findOne({ _id: new ObjectId(id) });
    await brand.deleteOne({ _id: new ObjectId(id) });

    return brand;
};