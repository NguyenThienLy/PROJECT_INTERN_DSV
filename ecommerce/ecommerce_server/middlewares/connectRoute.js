const brandRoute = require("../routes/v1/brand");
const categoryRoute = require("../routes/v1/category");
const commentRoute = require("../routes/v1/comment");
const customerRoute = require("../routes/v1/customer");
const orderRoute = require("../routes/v1/order");
const orderItemRoute = require("../routes/v1/orderItem");
const productRoute = require("../routes/v1/product");
const sellerRoute = require("../routes/v1/seller");
const subCategoryRoute = require("../routes/v1/subCategory");

module.exports = function(app) {
  app.use(
    "/api/v1/brand",
    brandRoute
  );

  app.use(
    "/api/v1/category",
    categoryRoute
  );

  app.use(
    "/api/v1/comment",
    commentRoute
  );

  app.use(
    "/api/v1/customer",
    customerRoute
  );

  app.use(
    "/api/v1/seller",
    sellerRoute
  );

  app.use(
    "/api/v1/order",
    orderRoute
  );

  app.use(
    "/api/v1/orderItem",
    orderItemRoute
  );

  app.use(
    "/api/v1/product",
    productRoute
  );

  app.use(
    "/api/v1/subCategory",
    subCategoryRoute
  );
};
