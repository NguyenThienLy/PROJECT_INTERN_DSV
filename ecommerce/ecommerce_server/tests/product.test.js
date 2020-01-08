require("dotenv").config();

//const app = require('../index');
const mongoose = require("mongoose");
const brandModel = require('../models/brand');
const subCategoryModel = require('../models/subCategory');
const productModel = require('../models/product');
const fs = require('fs');

const Product = require('../models/product');

//Require the dev-dependencies
const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const stub = require('sinon').stub;
const chaiParam = require('chai-param');
const param = chaiParam.param;
const controller = require('../controllers/product');

chai.use(chaiParam);

mongoose.connect(process.env.DATABASE_URL_TEST, {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => console.log('DB Connectedd!'))
    .catch(err => {
        console.log('Connected to Database');
    });

describe('product create (pure function)', () => {
    before((done) => {
        mongoose.connection.dropDatabase(() => {
            console.log('Cleaning - test database dropped');
            done();
        });
    });

    describe('create new item', () => {
        it("createNewItem is function", (done) => {
            expect(controller.createNewItem).to.be.a('function');
            done();
        })

        it('sucess', (done) => {
            const body = {
                brand: mongoose.Types.ObjectId("5e0d727364a47b32e08b1fec"),
                subCategory: mongoose.Types.ObjectId("5e0c69c8fcdb5c1a1087c897"),
                category: mongoose.Types.ObjectId("5e0c6ba16e053c3aac0dc53d"),
                status: "In-store",
                rate: 1,
                name: "Collete Stretch Linen",
                slug: "Collete-Stretch-Linen",
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

        it('fail, not exit brand id', (done) => {
            const body = {
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

            }).catch(err => {
                expect(err.message).to
                    .include("brand: Path `brand` is required");
                done();
            })
        })

        it('fail, not exit sub category id', () => {
            const body = {
                brand: mongoose.Types.ObjectId("5e0d727364a47b32e08b1fec"),
                subCategory: mongoose.Types.ObjectId("5e0c69c8fcdb5c1a1087c897"),
                status: "In-store",
                rate: 1,
                name: "Collete Stretch Linen Minidress Moday for",
                slug: "Collete-Stretch-Linen-Minidress-Moday-for",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                soldQuantity: 0,
                description: "New clothes"
            };

            controller.createNewItem(body).then((product) => {

            }).catch(err => {
                expect(err.message).to
                    .include("category: Path `category` is required")
            })
        })

        it('fail, not exit category id', () => {
            const body = {
                brand: mongoose.Types.ObjectId("5e0d727364a47b32e08b1fec"),
                category: mongoose.Types.ObjectId("5e0c6ba16e053c3aac0dc53d"),
                status: "In-store",
                rate: 1,
                name: "Collete Stretch Linen Minidress Moday",
                slug: "Collete-Stretch-Linen-Minidress-Moday",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                soldQuantity: 0,
                description: "New clothes"
            };

            controller.createNewItem(body).then((product) => {

            }).catch(err => {
                expect(err.message).to
                    .include("subCategory: Path `subCategory` is required")
            })
        })

        it('fail, slug exist', () => {
            const body = {
                brand: mongoose.Types.ObjectId("5e0d727364a47b32e08b1fec"),
                subCategory: mongoose.Types.ObjectId("5e0c6ba16e053c3aac0dc53d"),
                category: mongoose.Types.ObjectId("5e0c6ba16e053c3aac0dc53d"),
                status: "In-store",
                rate: 1,
                name: "Collete Stretch Linen",
                slug: "Collete-Stretch-Linen",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                soldQuantity: 0,
                description: "New clothes"
            };

            controller.createNewItem(body).then((product) => {

            }).catch(err => {
                expect(err.message).to
                    .include(`index: slug_1 dup key: { slug: "Collete-Stretch-Linen" }`)
            })
        })
    });

    describe('push product id in brand', () => {
        it("pushProducIdInBrand is function", (done) => {
            expect(controller.pushProductIdInBrand).to.be.a('function');
            done();
        })

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
        it("pushProductIdInSubCategory is function", (done) => {
            expect(controller.pushProductIdInSubCategory).to.be.a('function');
            done();
        })

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
        it("updateImageProduct is function", (done) => {
            expect(controller.updateImageProduct).to.be.a('function');
            done();
        })

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

    describe('format body product', () => {
        it("format body product is function", (done) => {
            expect(controller.formatBodyProduct).to.be.a('function');
            done();
        })

        it('success', (done) => {
            const body = {
                brand: "5e0d727364a47b32e08b1fec",
                subCategory: "5e0c69c8fcdb5c1a1087c897",
                category: "5e0c6ba16e053c3aac0dc53d",
                status: "In-store",
                size: JSON.stringify([
                    "S",
                    "M"
                ]),
                color: JSON.stringify([
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ]),
                name: "Collete Stretch",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                description: "New clothes"
            };

            const product = controller.formatBodyProduct(body);

            //console.log(product)

            expect(product).to.be.an("object");

            expect(product).have.property('color');
            expect(product).have.property('size');
            expect(product).have.property('brand');
            expect(product).have.property('subCategory');
            expect(product).have.property('category');
            expect(product).have.property('name');
            expect(product).have.property('slug');
            expect(product).have.property('mainImage');
            expect(product).have.property('price');
            expect(product).have.property('quantity');
            expect(product).have.property('description');

            expect(product.color).to.be.a('array');
            expect(product.size).to.be.a('array');
            expect(product.brand).to.be.a('string');
            expect(product.subCategory).to.be.a('string');
            expect(product.category).to.be.a('string');
            expect(product.name).to.be.a('string');
            expect(product.slug).to.be.a('string');
            expect(product.mainImage).to.be.a('string');
            expect(product.price).to.be.a('number');
            expect(product.quantity).to.be.a('number');
            expect(product.description).to.be.a('string');

            expect(product.color).to.have.lengthOf.at.most(5);
            expect(product.size).to.have.lengthOf.at.most(3);
            expect(product.name).to.have.lengthOf.least(1);
            expect(product.slug).to.not.include(" ");
            expect(product.price).to.be.at.least(1);
            expect(product.quantity).to.be.at.least(1);

            done();
        });
    });

    describe('upload image to storage', () => {
        it("uploadImageToStorage is function", (done) => {
            expect(controller.uploadImageToStorage).to.be.a('function');
            done();
        })
    });

    after((done) => {
        mongoose.connection.close(() => {
            console.log('Test database connection closed');
            done();
        });
    });
});

describe('product create (intergration)', () => {
    before(() => {

    });

    describe('create', () => {
        it('fail, not create product success', (done) => {
            const files = [
                'f1',
                'f2'
            ];
            const body = {
                brand: "5e0d727364a47b32e08b1fec",
                subCategory: "5e0c69c8fcdb5c1a1087c897",
                category: "5e0c6ba16e053c3aac0dc53d",
                status: "In-store",
                size: JSON.stringify([
                    "S",
                    "M"
                ]),
                color: JSON.stringify([
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ]),
                name: "Collete Stretch",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                description: "New clothes"
            };

            sinon.stub(controller, 'formatBodyProduct').returns({
                brand: '5e0d727364a47b32e08b1fec',
                subCategory: '5e0c69c8fcdb5c1a1087c897',
                category: '5e0c6ba16e053c3aac0dc53d',
                status: 'In-store',
                size: ['S', 'M'],
                color:
                    [{ code: '#ff5f6d', name: 'Pink' },
                    { code: 'rgba(255, 195, 113, 0.5)', name: 'Pale yellow' }],
                name: 'Collete Stretch',
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                price: 6.99,
                quantity: 2,
                description: 'New clothes',
                slug: 'Collete-Stretch'
            });

            sinon.stub(controller, 'createNewItem').resolves(null);

            controller.create(files, body).then(product => {
                expect(product).to.equal(null);
                sinon.restore();
                done();
            })
        })

        it('fail, create product success, not push image to firebase', (done) => {
            const files = [
                'f1',
                'f2'
            ];
            const body = {
                brand: "5e0d727364a47b32e08b1fec",
                subCategory: "5e0c69c8fcdb5c1a1087c897",
                category: "5e0c6ba16e053c3aac0dc53d",
                status: "In-store",
                size: JSON.stringify([
                    "S",
                    "M"
                ]),
                color: JSON.stringify([
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ]),
                name: "Collete Stretch",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                description: "New clothes"
            };

            sinon.stub(controller, 'formatBodyProduct').returns({
                brand: '5e0d727364a47b32e08b1fec',
                subCategory: '5e0c69c8fcdb5c1a1087c897',
                category: '5e0c6ba16e053c3aac0dc53d',
                status: 'In-store',
                size: ['S', 'M'],
                color:
                    [{ code: '#ff5f6d', name: 'Pink' },
                    { code: 'rgba(255, 195, 113, 0.5)', name: 'Pale yellow' }],
                name: 'Collete Stretch',
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                price: 6.99,
                quantity: 2,
                description: 'New clothes',
                slug: 'Collete-Stretch'
            });

            sinon.stub(controller, 'createNewItem').resolves({
                _id: mongoose.Types.ObjectId("5e09a7633e373f0d94b752ce"),
                color: [
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ],
                comment: [],
                size: [
                    "S",
                    "M"
                ],
                subImage: [
                ],
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
                description: "New clothes",
                createdAt: new Date("2019-12-30T07:29:39.310Z"),
                updateAt: new Date("2019-12-30T07:29:39.310Z"),
            });

            sinon.stub(controller, 'pushProductIdInSubCategory').resolves({
                _id: "5e0c692b5810aa3924df9db0",
                product: [
                    "5e1224bde3bda92a98318779"
                ],
                name: "Long dresse",
                slug: "Long-dresse",
                createdAt: "2020-01-01T09:40:59.438Z",
                updateAt: "2020-01-01T09:40:59.439Z"
            });

            sinon.stub(controller, 'pushProductIdInBrand').resolves({
                _id: "5e0d726764a47b32e08b1feb",
                product: [
                    "5e1233cd2e658c330c2cee1f",
                    "5e12f878ab168f2848ca89a3",
                    "5e12f93fab168f2848ca89a4"
                ],
                name: "Zara",
                createdAt: "2020-01-02T04:32:39.537Z",
                updateAt: "2020-01-02T04:32:39.537Z"
            });



            controller.create(files, body).then(product => {
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
                sinon.restore();
            })
        })

        it('fail, create product success, push image to firebase success, not update success', (done) => {
            const files = [
                'f1',
                'f2',
                'f3',
                'f4'
            ];
            const body = {
                brand: "5e0d727364a47b32e08b1fec",
                subCategory: "5e0c69c8fcdb5c1a1087c897",
                category: "5e0c6ba16e053c3aac0dc53d",
                status: "In-store",
                size: JSON.stringify([
                    "S",
                    "M"
                ]),
                color: JSON.stringify([
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ]),
                name: "Collete Stretch",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                description: "New clothes"
            };

            sinon.stub(controller, 'formatBodyProduct').returns({
                brand: '5e0d727364a47b32e08b1fec',
                subCategory: '5e0c69c8fcdb5c1a1087c897',
                category: '5e0c6ba16e053c3aac0dc53d',
                status: 'In-store',
                size: ['S', 'M'],
                color:
                    [{ code: '#ff5f6d', name: 'Pink' },
                    { code: 'rgba(255, 195, 113, 0.5)', name: 'Pale yellow' }],
                name: 'Collete Stretch',
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                price: 6.99,
                quantity: 2,
                description: 'New clothes',
                slug: 'Collete-Stretch'
            });

            sinon.stub(controller, 'createNewItem').resolves({
                _id: mongoose.Types.ObjectId("5e09a7633e373f0d94b752ce"),
                color: [
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ],
                comment: [],
                size: [
                    "S",
                    "M"
                ],
                subImage: [
                ],
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
                description: "New clothes",
                createdAt: new Date("2019-12-30T07:29:39.310Z"),
                updateAt: new Date("2019-12-30T07:29:39.310Z"),
            });

            sinon.stub(controller, 'pushProductIdInSubCategory').resolves({
                _id: "5e0c692b5810aa3924df9db0",
                product: [
                    "5e1224bde3bda92a98318779"
                ],
                name: "Long dresse",
                slug: "Long-dresse",
                createdAt: "2020-01-01T09:40:59.438Z",
                updateAt: "2020-01-01T09:40:59.439Z"
            });

            sinon.stub(controller, 'pushProductIdInBrand').resolves({
                _id: "5e0d726764a47b32e08b1feb",
                product: [
                    "5e1233cd2e658c330c2cee1f",
                    "5e12f878ab168f2848ca89a3",
                    "5e12f93fab168f2848ca89a4"
                ],
                name: "Zara",
                createdAt: "2020-01-02T04:32:39.537Z",
                updateAt: "2020-01-02T04:32:39.537Z"
            });

            sinon.stub(controller, 'uploadImageToStorage').resolves([
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834212?alt=media&token=a8621aab-7a19-4c22-afdf-6e139cb7a837",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834211?alt=media&token=e2f51dcb-2944-4517-abce-a51c13aaa9da",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834206?alt=media&token=1155ec64-7c79-4df7-8bff-bb7797c1aa3c",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834177?alt=media&token=e6d2144d-77c8-4cdd-a882-f30b3adf70c9"
            ]);

            sinon.stub(controller, 'updateImageProduct').resolves(null);

            controller.create(files, body).then(product => {
                Promise.all([controller.uploadImageToStorage(files, "123456"),
                controller.updateImageProduct("145267", files)]).then(res => {
                    expect(res[0]).to.lengthOf(4)
                    expect(res[0][0]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[0][1]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[0][2]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[0][3]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[1]).to.equal(null);
                    done();
                    sinon.restore();
                })
            })
        })

        it('success', (done) => {
            const files = [
                'f1',
                'f2',
                'f3',
                'f4'
            ];
            const body = {
                brand: "5e0d727364a47b32e08b1fec",
                subCategory: "5e0c69c8fcdb5c1a1087c897",
                category: "5e0c6ba16e053c3aac0dc53d",
                status: "In-store",
                size: JSON.stringify([
                    "S",
                    "M"
                ]),
                color: JSON.stringify([
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ]),
                name: "Collete Stretch",
                mainImage: "https://i.imgur.com/7eaGpti.jpg",
                price: 6.99,
                quantity: 2,
                description: "New clothes"
            };

            sinon.stub(controller, 'formatBodyProduct').returns({
                brand: '5e0d727364a47b32e08b1fec',
                subCategory: '5e0c69c8fcdb5c1a1087c897',
                category: '5e0c6ba16e053c3aac0dc53d',
                status: 'In-store',
                size: ['S', 'M'],
                color:
                    [{ code: '#ff5f6d', name: 'Pink' },
                    { code: 'rgba(255, 195, 113, 0.5)', name: 'Pale yellow' }],
                name: 'Collete Stretch',
                mainImage: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                price: 6.99,
                quantity: 2,
                description: 'New clothes',
                slug: 'Collete-Stretch'
            });

            sinon.stub(controller, 'createNewItem').resolves({
                _id: mongoose.Types.ObjectId("5e09a7633e373f0d94b752ce"),
                color: [
                    {
                        code: "#ff5f6d",
                        name: "Pink"
                    },
                    {
                        code: "rgba(255, 195, 113, 0.5)",
                        name: "Pale yellow"
                    }
                ],
                comment: [],
                size: [
                    "S",
                    "M"
                ],
                subImage: [
                ],
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
                description: "New clothes",
                createdAt: new Date("2019-12-30T07:29:39.310Z"),
                updateAt: new Date("2019-12-30T07:29:39.310Z"),
            });

            sinon.stub(controller, 'pushProductIdInSubCategory').resolves({
                _id: "5e0c692b5810aa3924df9db0",
                product: [
                    "5e1224bde3bda92a98318779"
                ],
                name: "Long dresse",
                slug: "Long-dresse",
                createdAt: "2020-01-01T09:40:59.438Z",
                updateAt: "2020-01-01T09:40:59.439Z"
            });

            sinon.stub(controller, 'pushProductIdInBrand').resolves({
                _id: "5e0d726764a47b32e08b1feb",
                product: [
                    "5e1233cd2e658c330c2cee1f",
                    "5e12f878ab168f2848ca89a3",
                    "5e12f93fab168f2848ca89a4"
                ],
                name: "Zara",
                createdAt: "2020-01-02T04:32:39.537Z",
                updateAt: "2020-01-02T04:32:39.537Z"
            });

            sinon.stub(controller, 'uploadImageToStorage').resolves([
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834212?alt=media&token=a8621aab-7a19-4c22-afdf-6e139cb7a837",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834211?alt=media&token=e2f51dcb-2944-4517-abce-a51c13aaa9da",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834206?alt=media&token=1155ec64-7c79-4df7-8bff-bb7797c1aa3c",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834177?alt=media&token=e6d2144d-77c8-4cdd-a882-f30b3adf70c9"
            ]);

            sinon.stub(controller, 'updateImageProduct').resolves(
                {
                    _id: mongoose.Types.ObjectId("5e09a7633e373f0d94b752ce"),
                    color: [
                        {
                            code: "#ff5f6d",
                            name: "Pink"
                        },
                        {
                            code: "rgba(255, 195, 113, 0.5)",
                            name: "Pale yellow"
                        }
                    ],
                    comment: [],
                    size: [
                        "S",
                        "M"
                    ],
                    subImage: [
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834212?alt=media&token=a8621aab-7a19-4c22-afdf-6e139cb7a837",
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834211?alt=media&token=e2f51dcb-2944-4517-abce-a51c13aaa9da",
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834206?alt=media&token=1155ec64-7c79-4df7-8bff-bb7797c1aa3c",
                        "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834177?alt=media&token=e6d2144d-77c8-4cdd-a882-f30b3adf70c9"
                    ],
                    brand: mongoose.Types.ObjectId("5e0d727364a47b32e08b1fec"),
                    subCategory: mongoose.Types.ObjectId("5e0c69c8fcdb5c1a1087c897"),
                    category: mongoose.Types.ObjectId("5e0c6ba16e053c3aac0dc53d"),
                    status: "In-store",
                    rate: 1,
                    name: "Collete Stretch Linen Minidress",
                    slug: "Collete-Stretch-Linen-Minidress",
                    mainImage: "https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/%2FProductImages%2F5e123a2299a4390df43ab15f%2F1578252834212?alt=media&token=a8621aab-7a19-4c22-afdf-6e139cb7a837",
                    price: 6.99,
                    quantity: 2,
                    soldQuantity: 0,
                    description: "New clothes",
                    createdAt: new Date("2019-12-30T07:29:39.310Z"),
                    updateAt: new Date("2019-12-30T07:29:39.310Z"),
                }
            );

            controller.create(files, body).then(product => {
                Promise.all([controller.uploadImageToStorage(files, "123456"),
                controller.updateImageProduct("145267", files)]).then(res => {
                    expect(res[0]).to.lengthOf(4)
                    expect(res[0][0]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[0][1]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[0][2]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[0][3]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");

                    expect(res[1]).to.be.an("object");

                    expect(res[1]).have.property('_id');
                    expect(res[1]).have.property('color');
                    expect(res[1]).have.property('comment');
                    expect(res[1]).have.property('size');
                    expect(res[1]).have.property('subImage');
                    expect(res[1]).have.property('soldQuantity');
                    expect(res[1]).have.property('rate');
                    expect(res[1]).have.property('status');
                    expect(res[1]).have.property('brand');
                    expect(res[1]).have.property('subCategory');
                    expect(res[1]).have.property('category');
                    expect(res[1]).have.property('name');
                    expect(res[1]).have.property('slug');
                    expect(res[1]).have.property('mainImage');
                    expect(res[1]).have.property('price');
                    expect(res[1]).have.property('quantity');
                    expect(res[1]).have.property('description');
                    expect(res[1]).have.property('createdAt');
                    expect(res[1]).have.property('updateAt');

                    expect(res[1]._id).to.be.a("object");
                    expect(res[1].color).to.be.a('array');
                    expect(res[1].comment).to.be.a('array');
                    expect(res[1].size).to.be.a('array');
                    expect(res[1].subImage).to.be.a('array');
                    expect(res[1].soldQuantity).to.be.a('number');
                    expect(res[1].rate).to.be.a('number');
                    expect(res[1].status).to.be.a('string');
                    expect(res[1].brand).to.be.a('object');
                    expect(res[1].subCategory).to.be.a('object');
                    expect(res[1].category).to.be.a('object');
                    expect(res[1].name).to.be.a('string');
                    expect(res[1].slug).to.be.a('string');
                    expect(res[1].mainImage).to.be.a('string');
                    expect(res[1].price).to.be.a('number');
                    expect(res[1].quantity).to.be.a('number');
                    expect(res[1].description).to.be.a('string');
                    expect(res[1].createdAt).to.be.a('date');
                    expect(res[1].updateAt).to.be.a('date');

                    expect(res[1].color).to.have.lengthOf.at.most(5);
                    expect(res[1].size).to.have.lengthOf.at.most(3);
                    expect(res[1].subImage).to.have.lengthOf(4);
                    expect(res[1].subImage[0]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[1].subImage[1]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[1].subImage[2]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[1].subImage[3]).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[1].mainImage).to.include("https://firebasestorage.googleapis.com/v0/b/ecommerce-intern.appspot.com/o/");
                    expect(res[1].subImage[0]).to.equal(res[1].mainImage);
                    expect(res[1].soldQuantity).to.be.at.least(0);
                    expect(res[1].rate).to.be.at.least(1);
                    expect(res[1].status).to.equal("In-store");
                    expect(res[1].name).to.have.lengthOf.least(1);
                    expect(res[1].price).to.be.at.least(1);
                    expect(res[1].quantity).to.be.at.least(1);


                    done();
                    sinon.restore();
                })
            })
        })
    });

    after((done) => {
        sinon.restore();
        done();
    })
});