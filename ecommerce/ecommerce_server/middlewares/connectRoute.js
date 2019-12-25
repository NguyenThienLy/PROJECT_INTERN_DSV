const productRoute = require("../routes/v1/product");

module.exports = function(app) {
  app.use(
    "/v1/product",
    productRoute
  );
};
