require("dotenv").config();

//const app = require('../index');
const mongoose = require("mongoose");
const brandModel = require('../models/brand');
const subCategoryModel = require('../models/subCategory');
const productModel = require('../models/product');

const Product = require('../models/product');

//Require the dev-dependencies
const expect = require('chai').expect;
const assert = require('chai').assert;
const controller = require('../controllers/product');

mongoose.connect(process.env.DATABASE_URL_TEST, {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => console.log('DB Connectedd!'))
    .catch(err => {
        console.log('Connected to Database');
    });

describe('product create', () => {
    before((done) => {
        mongoose.connection.dropDatabase(() => {
            console.log('Cleaning - test database dropped');
            done();
        });
    });

    describe('create new item', () => {
        it('sucess', (done) => {
            const body = {
                brand: mongoose.Types.ObjectId("5e0d727364a47b32e08b1fec"),
                subCategory: mongoose.Types.ObjectId("5e0c69c8fcdb5c1a1087c897"),
                category: mongoose.Types.ObjectId("5e0c6ba16e053c3aac0dc53d"),
                status: "In-store",
                rate: 1,
                name: "Collete Stretch Linen Minidress",
                slug: "Collete-Stretch-Linen-Minidress",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                soldQuantity: 0,
                description: "New clothes"
            };

            controller.createNewItem(body).then((product) => {
                expect(product).to.be.an("object");

                expect(product).have.property('_id');
                expect(product).have.property('color');
                expect(product).have.property('comment');
                expect(product).have.property('size');
                expect(product).have.property('subImage');
                expect(product).have.property('soldQuantity');
                expect(product).have.property('rate');
                expect(product).have.property('status');
                expect(product).have.property('brand');
                expect(product).have.property('subCategory');
                expect(product).have.property('category');
                expect(product).have.property('name');
                expect(product).have.property('slug');
                expect(product).have.property('mainImage');
                expect(product).have.property('price');
                expect(product).have.property('quantity');
                expect(product).have.property('description');
                expect(product).have.property('createdAt');
                expect(product).have.property('updateAt');

                expect(product._id).to.be.a("object");
                expect(product.color).to.be.a('array');
                expect(product.comment).to.be.a('array');
                expect(product.size).to.be.a('array');
                expect(product.subImage).to.be.a('array');
                expect(product.soldQuantity).to.be.a('number');
                expect(product.rate).to.be.a('number');
                expect(product.status).to.be.a('string');
                expect(product.brand).to.be.a('object');
                expect(product.subCategory).to.be.a('object');
                expect(product.category).to.be.a('object');
                expect(product.name).to.be.a('string');
                expect(product.slug).to.be.a('string');
                expect(product.mainImage).to.be.a('string');
                expect(product.price).to.be.a('number');
                expect(product.quantity).to.be.a('number');
                expect(product.description).to.be.a('string');
                expect(product.createdAt).to.be.a('date');
                expect(product.updateAt).to.be.a('date');


                expect(product.color).to.have.lengthOf.at.most(5);
                expect(product.size).to.have.lengthOf.at.most(3);
                expect(product.subImage).to.have.lengthOf.at.most(4);
                expect(product.soldQuantity).to.be.at.least(0);
                expect(product.rate).to.be.at.least(1);
                expect(product.status).to.equal("In-store");
                expect(product.name).to.have.lengthOf.least(1);
                expect(product.price).to.be.at.least(1);
                expect(product.quantity).to.be.at.least(1);

                done();
            })
        })
    });

    describe('push product id in brand', () => {
        it('success', (done) => {
            brandModel.create({
                name: "test"
            }).then(brand => {
                const idBrand = brand._id;
                const idNewProduct = "5e0c69c8fcdb5c1a1087c897";

                controller.pushProductIdInBrand(idBrand, idNewProduct).then(brand1 => {
                    expect(brand1).to.be.an("object");

                    expect(brand1).have.property('_id');
                    expect(brand1).have.property('product');
                    expect(brand1).have.property('name');
                    expect(brand1).have.property('createdAt');
                    expect(brand1).have.property('updateAt');

                    expect(brand1._id).to.be.a('object');
                    expect(brand1.product).to.be.a('array');
                    expect(brand1.name).to.be.a('string');
                    expect(brand1.createdAt).to.be.a('date');
                    expect(brand1.updateAt).to.be.a('date');

                    expect(brand1.product).to.include(mongoose.Types.ObjectId(idNewProduct));

                    done();
                });
            });
        });

        it('fail, id brand not exist', (done) => {

            const idBrand = "5e0d727364a47b32e08b1fec";
            const idNewProduct = "5e0c69c8fcdb5c1a1087c897";


            controller.pushProductIdInBrand(idBrand, idNewProduct).then((brand) => {
                expect(brand).is.null;
                done();
            })
        })
    });

    describe('push product id in sub category', () => {
        it('success', (done) => {
            subCategoryModel.create({
                name: "test",
                slug: "test"
            }).then(subCategory => {
                const idSubCategory = subCategory._id;
                const idNewProduct = "5e0c69c8fcdb5c1a1087c897";

                controller.pushProductIdInSubCategory(idSubCategory, idNewProduct).then(subCategory1 => {
                    expect(subCategory1).to.be.an("object");

                    expect(subCategory1).have.property('_id');
                    expect(subCategory1).have.property('product');
                    expect(subCategory1).have.property('name');
                    expect(subCategory1).have.property('slug');
                    expect(subCategory1).have.property('createdAt');
                    expect(subCategory1).have.property('updateAt');

                    expect(subCategory1._id).to.be.a('object');
                    expect(subCategory1.product).to.be.a('array');
                    expect(subCategory1.name).to.be.a('string');
                    expect(subCategory1.slug).to.be.a('string');
                    expect(subCategory1.createdAt).to.be.a('date');
                    expect(subCategory1.updateAt).to.be.a('date');

                    expect(subCategory1.product).to.include(mongoose.Types.ObjectId(idNewProduct));
                    done();
                });
            });
        });

        it('fail, id sub category not exist', (done) => {
            const idSubCategory = "5e0d727364a47b32e08b1fec";
            const idNewProduct = "5e0c69c8fcdb5c1a1087c897";

            controller.pushProductIdInSubCategory(idSubCategory, idNewProduct).then((subCategory) => {
                expect(subCategory).is.null;
                done();
            })
        })
    });

    describe('update image product', () => {
        it('success', (done) => {
            const body = {
                brand: mongoose.Types.ObjectId("5e0d727364a47b32e08b1fec"),
                subCategory: mongoose.Types.ObjectId("5e0c69c8fcdb5c1a1087c897"),
                category: mongoose.Types.ObjectId("5e0c6ba16e053c3aac0dc53d"),
                status: "In-store",
                rate: 1,
                name: "Collete Stretch",
                slug: "Collete-Stretch",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                soldQuantity: 0,
                description: "New clothes"
            };

            productModel.create(body).
                then(product => {
                    const idNewProduct = product._id;
                    const listUrl = [
                        "https://i.imgur.com/7eaGpti.jpg",
                        "https://i.imgur.com/9cSuCwv.jpg",
                        "https://i.imgur.com/RS9KV04.jpg",
                        "https://i.imgur.com/Qi3Xuoi.jpg"
                    ];

                    controller.updateImageProduct(idNewProduct, listUrl).then(product1 => {
                        expect(product1).to.be.an("object");

                        expect(product1).have.property('_id');
                        expect(product1).have.property('color');
                        expect(product1).have.property('comment');
                        expect(product1).have.property('size');
                        expect(product1).have.property('subImage');
                        expect(product1).have.property('soldQuantity');
                        expect(product1).have.property('rate');
                        expect(product1).have.property('status');
                        expect(product1).have.property('brand');
                        expect(product1).have.property('subCategory');
                        expect(product1).have.property('category');
                        expect(product1).have.property('name');
                        expect(product1).have.property('slug');
                        expect(product1).have.property('mainImage');
                        expect(product1).have.property('price');
                        expect(product1).have.property('quantity');
                        expect(product1).have.property('description');
                        expect(product1).have.property('createdAt');
                        expect(product1).have.property('updateAt');
        
                        expect(product1._id).to.be.a("object");
                        expect(product1.color).to.be.a('array');
                        expect(product1.comment).to.be.a('array');
                        expect(product1.size).to.be.a('array');
                        expect(product1.subImage).to.be.a('array');
                        expect(product1.soldQuantity).to.be.a('number');
                        expect(product1.rate).to.be.a('number');
                        expect(product1.status).to.be.a('string');
                        expect(product1.brand).to.be.a('object');
                        expect(product1.subCategory).to.be.a('object');
                        expect(product1.category).to.be.a('object');
                        expect(product1.name).to.be.a('string');
                        expect(product1.slug).to.be.a('string');
                        expect(product1.mainImage).to.be.a('string');
                        expect(product1.price).to.be.a('number');
                        expect(product1.quantity).to.be.a('number');
                        expect(product1.description).to.be.a('string');
                        expect(product1.createdAt).to.be.a('date');
                        expect(product1.updateAt).to.be.a('date');
        
                        expect(product1.color).to.have.lengthOf.at.most(5);
                        expect(product1.size).to.have.lengthOf.at.most(3);
                        expect(product1.mainImage).to.equal(listUrl[0]);
                        expect(product1.subImage).to.have.lengthOf(4);
                        expect(product1.subImage).to.include(listUrl[0]);
                        expect(product1.subImage).to.include(listUrl[1]);
                        expect(product1.subImage).to.include(listUrl[2]);
                        expect(product1.subImage).to.include(listUrl[3]);
                        expect(product1.soldQuantity).to.be.at.least(0);
                        expect(product1.rate).to.be.at.least(1);
                        expect(product1.status).to.equal("In-store");
                        expect(product1.name).to.have.lengthOf.least(1);
                        expect(product1.price).to.be.at.least(1);
                        expect(product1.quantity).to.be.at.least(1);
        
                        done();
                    });
                });
        });

        it('fail, id product not exist', (done) => {
            const idNewProduct = "5e0c69c8fcdb5c1a1087c897";
            const listUrl = [
                "https://i.imgur.com/7eaGpti.jpg",
                "https://i.imgur.com/9cSuCwv.jpg",
                "https://i.imgur.com/RS9KV04.jpg",
                "https://i.imgur.com/Qi3Xuoi.jpg"
            ];

            controller.updateImageProduct(idNewProduct, listUrl).then((product) => {
                expect(product).is.null;
                done();
            })
        })
    });

    after((done) => {
        mongoose.connection.close(() => {
            console.log('Test database connection closed');
            done();
        });
    });
});