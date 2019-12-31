require("dotenv").config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const model = require('../models/customer');
const { ObjectId } = require('bson');
const saltRounds = 10;

module.exports.login = async (body) => {
    console.log("emai", body)
    const item = await model.findOne({ email: body.email });

    if (item) {
        const isEqual = await bcrypt.compare(body.password, item.password);

        if (isEqual) {
            const payload = { role: "customer", _id: item._id};
            const jwtToken = jwt.sign({ payload,  expiresIn: '3d' }, process.env.JWT_SECRET);

            return {
                isLogin: true,
                message: "Logged in successfully!",
                customer: item,
                accessToken: jwtToken
            };
        }

        return {
            isLogin: false,
            message: "Incorrect password!"
        };
    }

    return {
        isLogin: false,
        message: "Email does not exist!"
    };
}

module.exports.getList = async () => {
    const list = await model.find();

    return list;
};

module.exports.getItem = async (id) => {
    const item = await model.findOne({ _id: new ObjectId(id) });

    return item;
};

module.exports.create = async (body) => {
    body.password = await bcrypt.hash(body.password, saltRounds);

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