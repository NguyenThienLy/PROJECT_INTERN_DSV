const model = require('../models/brand');
const { ObjectId } = require('bson');

module.exports.getFromBrand = async (idBrand, idProduct) => {
    const item = await model.aggregate([
        {
            $match: { _id: new ObjectId(`${idBrand}`) }
        },
        {
            $lookup:
            {
                from: "product",
                localField: "product",
                foreignField: "_id",
                as: "listProduct"
            }
        },
        {
            $project: {
                listProduct: {
                    $filter: {
                        input: "$listProduct",
                        as: "element",
                        cond: { $ne: ["$$element._id", new ObjectId(`${idProduct}`)] }
                    }
                }
            }
        },
        {
            $limit: 4
        }
    ]);

    return item[0].listProduct;
};

module.exports.getList = async () => {
    const list = await model.find();

    return list;
};

module.exports.getItem = async (id) => {
    const item = await model.findOne({ _id: new ObjectId(id) });

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