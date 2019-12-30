const Product = require('../models/product');
const { ObjectId } = require('bson');

module.exports.productFilter = (req, res) => {
    const product = {
        id: 1,
        name: "Nguyen Thien Ly",
        age: 22
    }

    return product;
};

module.exports.getList = async () => {
    const products = await Product.find();

    return products;
}

module.exports.getItem = async (id) => {
    const product = await Product.findOne({ _id:new ObjectId(id) });

    return product;
}

module.exports.create = async (body) => {
    const product = await Product.create(body);

    return product;
}

module.exports.update = async (id, body) => {
    const product = await Product.findOneAndUpdate({ _id: new ObjectId(id) }, body, { new: true });

    return product;
}

module.exports.delete = async (id) => {
    const product = await Product.findOne({ _id: new ObjectId(id) });
    await Product.deleteOne({ _id: new ObjectId(id) });

    return product;
}