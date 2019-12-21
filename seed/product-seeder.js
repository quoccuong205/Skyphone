var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var products = [
  new Product({
    imagePath:
      "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/6/3/636748797175081877_iphone-xr-do_9.png",
    title: "iPhone XR",
    description: "iPhone XR International - Productform : RankA - Backed up to 12 months warranty with a premium package",
    price: 749,
    status: "In Stock",
    id: 0,
    model: 'iphone'
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
    title: "Iphone XS Max",
    description: "iPhone XR Max International - Productform : RankA - Backed up to 12 months warranty with a premium package",
    price: 1099,
    status: "InStock",
    id: 1,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/50823174.jpeg",
    title: "iPhone XS",
    description: "iPhone XS International - Productform : RankA - Backed up to 12 months warranty with a premium package",
    price:
      999,
    status: "InStock",
    id: 2,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-64gb-2-sim.jpg",
    title: "iphone 11",
    description: "iPhone 11 International - Productform : RankA - Backed up to 12 months warranty with a premium package",
    price: 709,
    status: "InStock",
    id: 3,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-400x460.png",
    title: "Samsung Galaxy Note 10+",
    description: "Mainboard 12 months.Power, touchscreen and 3-month camera.30-day test case",
    price: 949,
    status: "InStock",
    id: 4,
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/_/6/_600x600__crop_600_asus_rog_phone2_min_1.jpg",
    title: "ASUS ROG Phone 2512GB",
    description: "Fullbox,body,box,charger,cable.Support installing romTV + back up to 12 month warranty",
    price: 880,
    status: "InStock",
    id: 5,
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/3/636675937265892591_nova3i-xanh-1.jpg",
    title: "Huawei nova 31",
    description: "Fullbox,body,box + Backed up to 12 months warranty with a premium package",
    price: 179,
    status: "InStock",
    id: 21,
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/6/3/636753307469671737_huawei-mate20-xanhden-1_1_2.jpg",
    title: "Huawei Mate 20",
    description: "Fullbox,body,box + Backed up to 12 months warranty with a premium package",
    price: 49,
    status: "InStock",
    id: 6,
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/11/636828015979564724_ipad-pro-12-9-xam-1.png",
    title: "Ipad pro 12.9'' 4G + Wifi",
    description: "iPad Pro 12.9'' 4G + Wifi iPad are all 100% genuine international versions with 36 months warranty",
    price:
      999,
    status: "InStock",
    id: 7,
    model: "tablet",
  }),
  new Product({
    imagePath: "https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg",
    title: "iPhone X",
    description: "iPhone X Plus International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 699,
    status: "InStock",
    id: 9,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg",
    title: "iPhone 8 Plus",
    description: "iPhone 8 Plus International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 659,
    status: "InStock",
    id: 8,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_7_plus_128gb.jpg",
    title: "iPhone 7 Plus",
    description: "iPhone 7 PlusInternational - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 599,
    status: "InStock",
    id: 11,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/6/s/6s_rose_2.jpg",
    title: "iPhone 6s Plus",
    description: "iPhone 6s Plus International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 549,
    status: "InStock",
    id: 22,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_7_plus_128gb.jpg",
    title: "iPhone 7",
    description: "iPhone 7 International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 569,
    status: "InStock",
    id: 12,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    title: "iPhone 6",
    description: "iPhone 6 International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 399,
    status: "InStock",
    id: 13,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://stcv4.hnammobile.com//uploads/products/colors/3/apple-iphone-5-se-32gb-cu-99-01556792746.jpg",
    title: "iPhone 5 SE",
    description: "iPhone 5 SE International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 299,
    status: "InStock",
    id:
      14,
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/210441/oppo-a5-2020-white-600x600.jpg",
    title: "OPPO A5 (2020) 64GB",
    description: "Runs on Android v8.1(Oreo) operating system (Freeship + 36 month warranty)",
    price: 185,
    status: "InStock",
    id: 15,
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-600x600.jpg",
    title: "Samsung Galaxy Fold",
    description: "0% interest in stallment with Home Credit.30% prepayment, 6 month term",
    price:
      2000,
    status: "InStock",
    id:
      18,
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600.jpg",
    title: "Samsung Galaxy Note 9",
    description: "0% interest in stallment with Home Credit.30% prepayment, 6 month term",
    price:
      990,
    status: "InStock",
    id:
      19,
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/195012/samsung-galaxy-a70-white-600x600.jpg",
    title: "Samsung Galaxy A70",
    description: "0% interest in stallment with Home Credit.30% prepayment, 6 month term",
    price:
      399,

    status: "InStock",
    id:
      17,

    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/204404/samsung-galaxy-a20s-black-600x600.jpg",
    title: "Samsung Galaxy A20s 64GB",
    description: "New samsung phone with a 6.40-inch touch screen display with a resolution of 720x1560 pixels.",
    price:
      219,
    status: "InStock",
    id:16,
    model: "android",
  }),
  new Product({

    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/11/636827999346152175_ipad-pro-11-wi-fi-xam-1.png",
    title: "iPad Pro 11 inch 4G + Wifi",
    description: "iPad Pro 11 inch 4G + Wifi are all 100% genuine international versions with 36 months warranty",
    price:
      899,

    status: "InStock",
    id:
      20,

    model: "tablet",
  }),
  new Product({
    imagePath: "https://ilounge.ua/files/products/apple-silicone-case-charcoal-gray-ipad-pro-9-7-2.1000x1000.jpg",
    title: "iPad Pro 9.74 G + WIFI",
    description: "iPad Pro 11 ich 4G + Wifi are all 100% genuine international versions with 36 months warranty",
    price:
      899,

    status: "InStock",
    id:
      23,
    model: "tablet",
  }),
  new Product({
    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/7/4/636663192821960051_ipad-2018-4.jpg",
    title: "iPad 2018 4G + WIFI",
    description: "iPad 2018 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      699,
    
    status: "InStock",
    id:
      24,
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://product.hstatic.net/1000353777/product/apple-ipad-2017-32gb-wifi--4g-ivvgb.png",
    title: "iPad 2017 4G + WIFI",
    description: "iPad 2017 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      499,
    
    status: "InStock",
    id:
      25,
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/ipad-mini-4-16gb-wifi-4g-vang-didongviet_1_2.jpg",
    title: "iPad Mini 4 4G + WIFI",
    description: "iPad Mini 4 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      359,
    
    status: "InStock",
    id:
      26,
    
    model: "tablet",
  }),
  new Product({
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/ipad-mini-4-16gb-wifi-4g-vang-didongviet_1_2.jpg",
    title: "iPad Air 2 4G + WIFI",
    description: "iPad Air 2 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      329,
    
    status: "InStock",
    id:
      27,
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/ipad-mini-4-16gb-wifi-4g-vang-didongviet_1_2.jpg",
    title: "iPad Mini 3 4G + WIFI",
    description: "iPad Mini 3 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      299,
    
    status: "InStock",
    id:
      28,
    
    model: "tablet",
  }),
  new Product({
    imagePath: "https://sw001.hstatic.net/7/1320b5e13c04ba/ipad-air-2-space-gray-cellular-hai-phong-gia-re_master.jpg",
    title: "iPad Air 4G + WIFI",
    description: "iPad Air 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      205,
    
    status: "InStock",
    id:
      29,
    
    model: "tablet",
  }),
  new Product({
    imagePath: "https://sw001.hstatic.net/7/1320b5e13c04ba/ipad-air-2-space-gray-cellular-hai-phong-gia-re_master.jpg",
    title: "iPad Mini 2 4G + WIFI",
    description: "iPad Mini 2 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      159,
    status: "InStock",
    id:
      30,
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://sw001.hstatic.net/7/1320b5e13c04ba/ipad-air-2-space-gray-cellular-hai-phong-gia-re_master.jpg",
    title: "iPad Mini 1 Only WIFI",
    description: "iPad Mini 1 Only WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      120,
    
    status: "InStock",
    id:
      31,
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._SL1500_.jpg",
    title: "Apple Watch Serries 5 GPS",
    description: "STATUS: 100% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      520,
    
    status: "InStock",
    id:
      32,
    
    model: "watch",
  }),
  new Product({    
    imagePath: "https://www.trumiwatch.vn/wp-content/uploads/2019/05/apple-watch-series-3-thep-LTE-2.jpg",
    title: "Apple Watch 3 LTE - 99%",
    description: "STATUS: 99% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      240,
    
    status: "InStock",
    id:
      33,
    
    model: "watch",
  }),
  new Product({    
    imagePath: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FQK32?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1523395264885",
    title: "Apple Watch 3 GPS - NEW",
    description: "STATUS: 100% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      200,
    status: "InStock",
    id:
      34,
    model: "watch",
  }),
  new Product({
    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/9/14/636725447622444194_MU642VNA%201.png",
    title: "Apple Watch 4 GPS NEW",
    description: "STATUS: 100% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      100,
    status: "InStock",
    id:
      35,
    model: "watch",
  }),
  new Product({
    imagePath: "https://product.hstatic.net/1000367970/product/apple-watch-series-4-new-100_ban-nhom-gps-40-mm-hong_b3d58361b1bc408baecdc9f1f386a5a4_master.jpeg",
    title: "Apple Watch 4 (LTE) - 99%",
    description: "STATUS: 99% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      50,
    status: "InStock",
    id:
      36,
    model: "watch",
  }),
  
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
