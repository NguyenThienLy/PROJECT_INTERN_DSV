require("dotenv").config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const customerModel = require('../controllers/customer');
const sellerModel = require('../controllers/seller');
const invalidTokenModel = require('../models/invalidToken');

exports.isAuth = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if (!authorization) res.status(401).json({ message: 'You need login!' });

        const jwtToken = authorization.split(' ')[1];

        const item = await invalidTokenModel.findOne({ token: jwtToken });

        // check token in blacklist
        if (!item) {
            const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

            if (payload.role === "customer") {
                const customer = await customerModel.getItem(payload._id);
                req.authInfo = "customer";
            }
            else if (payload.role === "seller") {
                const seller = await sellerModel.getItem(payload._id);
                req.authInfo = "seller";
            }
            else {
                res.status(401).json({ message: 'You need login!' });
            }
        }
        else
            res.status(401).json({ message: 'You need login!' });

        next();
    }
    catch (err) {
        res.status(401).json({ message: 'You need login!' });
    }
};