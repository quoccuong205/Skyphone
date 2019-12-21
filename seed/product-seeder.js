var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var products = [
  new Product({
    imagePath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566960958082",
    title: "iPhone 11",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 2149000,
    status: "In Stock",
    id: 0,
    model:'iphone'
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
