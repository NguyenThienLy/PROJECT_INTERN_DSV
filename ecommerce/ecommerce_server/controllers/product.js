const { ObjectId } = require('bson');
const firebase = require('../services/firebase');
const model = require('../models/product');
const brandModel = require('../models/brand');
const subCategoryModel = require('../models/subCategory');
const moment = require('moment');

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
        },
        {
            $lookup:
            {
                from: "brand",
                localField: "brand",
                foreignField: "_id",
                as: "brandList"
            }
        },
        {
            $sort: { createdAt: -1 }
        },
        {
            $limit: 12
        }
    ]);

    return list;
};

module.exports.getList = async () => {
    const list = await model.find();

    return list;
};

module.exports.getItem = async (slug) => {
    const item = await model.aggregate([
        {
            $match: { slug: slug }
        },
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
        },
        {
            $lookup:
            {
                from: "brand",
                localField: "brand",
                foreignField: "_id",
                as: "brandList"
            }
        }
    ]);

    return item[0];
};

module.exports.create = async (files, body) => {
    body.size = JSON.parse(body.size);
    body.color = JSON.parse(body.color);
    body.slug = body.name.replace(/ /g, "_");
    body.mainImage = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";

    let item = await model.create(body);

    if (item !== null) {
        await brandModel.findOneAndUpdate(
            { _id: new ObjectId(body.brand) },
            { $push: { product: new ObjectId(item._id) } },
            { new: true }
        );

        await subCategoryModel.findOneAndUpdate(
            { _id: new ObjectId(body.subCategory) },
            { $push: { product: new ObjectId(item._id) } },
            { new: true }
        );

        if (files.length > 0) {
            const listUrl = await firebase.uploadImageToStorage(files, item._id);

            if (listUrl.length > 0) {
                item = await model.findOneAndUpdate(
                    { _id: new ObjectId(item._id) },
                    { mainImage: listUrl[0], subImage: listUrl },
                    { new: true }
                );
            }
        }
    }

    return item;
};

module.exports.update = async (id, files, body) => {
    let isHaveMainImage;
    body.size = JSON.parse(body.size);
    body.color = JSON.parse(body.color);
    body.subImage = JSON.parse(body.listLink);
    body.slug = body.name.replace(/ /g, "_");
    body.updateAt = moment();

    if (body.subImage.length > 0) {
        body.mainImage = body.subImage[0];
        isHaveMainImage = true;
    }
    else {
        isHaveMainImage = false
    }

    let item = await model.findOneAndUpdate({ _id: new ObjectId(id) }, body, { new: true });

    if (item !== null) {
        if (body.oldSubcategory !== body.subCategory) {
            // delete in oldSubCategory
            await subCategoryModel.findOneAndUpdate(
                { _id: new ObjectId(body.oldSubcategory) },
                { $pull: { product: new ObjectId(item._id) } },
                { new: true }
            );

            // update in newSubCategory
            await subCategoryModel.findOneAndUpdate(
                { _id: new ObjectId(body.subCategory) },
                { $push: { product: new ObjectId(item._id) } },
                { new: true }
            );
        }

        if (body.oldBrand !== body.brand) {
            // delete in oldBrand
            await brandModel.findOneAndUpdate(
                { _id: new ObjectId(body.oldBrand) },
                { $pull: { product: new ObjectId(item._id) } },
                { new: true }
            );

            // update in newBrand
            await brandModel.findOneAndUpdate(
                { _id: new ObjectId(body.brand) },
                { $push: { product: new ObjectId(item._id) } },
                { new: true }
            );
        }

       // console.log("files", files)
        if (files.length > 0) {
            const listUrl = await firebase.uploadImageToStorage(files, item._id);

            if (listUrl.length > 0) {
                if (isHaveMainImage)
                    item = await model.findOneAndUpdate(
                        { _id: new ObjectId(item._id) },
                        { $push: { subImage: { $each: listUrl } } },
                        { new: true }
                    );
                else {
                    item = await model.findOneAndUpdate(
                        { _id: new ObjectId(item._id) },
                        { mainImage: listUrl[0], $push: { subImage: { $each: listUrl } } },
                        { new: true }
                    );
                }
            }
        }
    }

    return item;
};

module.exports.delete = async (id) => {
    const item = await model.findOne({ _id: new ObjectId(id) });
    await item.deleteOne({ _id: new ObjectId(id) });

    return item;
};



