var express = require("express");
var router = express.Router();

var Product = require("../models/product");

/* GET home page. */
router.get("/", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 8; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render("homepage/index", {
      title: "SKYPHONE",
      products: productChunks
    });
  });
});
router.get("/collections/iphone-quoc-te", function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 6;
    for (var i = 8; i < 20; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render("homepage/iphonequocte", { products: productChunks });
  });
});

module.exports = router;
