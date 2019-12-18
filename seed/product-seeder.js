var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var products = [
  new Product({
    imagePath:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/115x/9df78eab33525d08d6e5fb8d27136e95/v/s/vsmart-live-xanh_1.jpg",
    title: "Vsmart Live 6GB",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 3709000,
    status: "In Stock"
  }),

  new Product({
    imagePath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566960958082",
    title: "iPhone 11",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 2149000,
    status: "In Stock"
  }),

  new Product({
    imagePath:
      "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
    title: "iPhone XS Max",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 2799000,
    status: "In Stock"
  }),

  new Product({
    imagePath:
      "https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008702547566121_SS-note-10-pl-glow-1-1.png",
    title: "Samsung Galaxy Note 10+",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 19005000,
    status: "In Stock"
  }),

  new Product({
    imagePath:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/_/6/_600x600__crop_600_asus_rog_phone2_min_1.jpg",
    title: "ASUS ROG Phone 2 512GB",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 21990000,
    status: "In Stock"
  }),

  new Product({
    imagePath:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/3/636675937265892591_nova3i-xanh-1.jpg",
    title: "Huawei nova 3i",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 4690000,
    status: "In Stock"
  }),

  new Product({
    imagePath:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/6/3/636753307469671737_huawei-mate20-xanhden-1_1_2.jpg",
    title: "Huawei Mate 20",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 15990000,
    status: "In Stock"
  }),

  new Product({
    imagePath:
      "https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008702547566121_SS-note-10-pl-glow-1-1.png",
    title: "Samsung Galaxy Note 10+",
    description: "Giảm 200.000đ khi mua kèm tai nghe airpods và 1 km khác",
    price: 27990000,
    status: "In Stock"
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
