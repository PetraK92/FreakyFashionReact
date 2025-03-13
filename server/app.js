var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var createError = require("http-errors");

var adminRouter = require("./routes/admin");
var productRouter = require("./routes/product");
var newRouter = require("./routes/new");
var loadProductsRouter = require("./routes/loadProducts");
var addProductRouter = require("./routes/addProduct");
var getProductRouter = require("./routes/getProduct");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Route entrypoints
app.use("/admin/products", adminRouter);
app.use("/api/product", productRouter);
app.use("/admin/products/new", newRouter);
app.use("/api/products", loadProductsRouter);
app.use("/admin/products/addProduct", addProductRouter);
app.use("/api/getproduct", getProductRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
