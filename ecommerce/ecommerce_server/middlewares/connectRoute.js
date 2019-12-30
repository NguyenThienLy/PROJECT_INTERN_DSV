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
    "/v1/brand",
    brandRoute
  );

  app.use(
    "/v1/category",
    categoryRoute
  );

  app.use(
    "/v1/comment",
    commentRoute
  );

  app.use(
    "/v1/customer",
    customerRoute
  );

  app.use(
    "/v1/order",
    orderRoute
  );

  app.use(
    "/v1/orderItem",
    orderItemRoute
  );

  app.use(
    "/v1/product",
    productRoute
  );

  app.use(
    "/v1/subCategory",
    subCategoryRoute
  );
};
