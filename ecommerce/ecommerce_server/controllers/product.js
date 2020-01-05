const { ObjectId } = require('bson');
const firebase = require('../services/firebase');
const model = require('../models/product');

module.exports.getListFitler = async (params) => {
    const list = await model.aggregate([
        {
            $lookup:
            {
                from: "subCategory",
                localField: "subCategory",
                foreignField: "_id",
                as: "subCategoryList"
            }
        },
        {
            $lookup:
            {
                from: "category",
                localField: "category",
                foreignField: "_id",
                as: "categoryList"
            }
        }
    ]);

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

module.exports.create = async (file, body) => {
    if (file) {
        const url = await firebase.uploadImageToStorage(file,123456);

        console.log(url)
    }

    //const item = await model.create(body);
    const item = 0;

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

