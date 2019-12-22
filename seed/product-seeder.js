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
    model: 'iphone'
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
    title: "Iphone XS Max",
    description: "iPhone XR Max International - Productform : RankA - Backed up to 12 months warranty with a premium package",
    price: 1099,
    status: "InStock",
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/50823174.jpeg",
    title: "iPhone XS",
    description: "iPhone XS International - Productform : RankA - Backed up to 12 months warranty with a premium package",
    price:
      999,
    status: "InStock",
    model: "iphone",
  }),
  new Product({
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-64gb-2-sim.jpg",
    title: "iphone 11",
    description: "iPhone 11 International - Productform : RankA - Backed up to 12 months warranty with a premium package",
    price: 709,
    status: "InStock",
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-400x460.png",
    title: "Samsung Galaxy Note 10+",
    description: "Mainboard 12 months.Power, touchscreen and 3-month camera.30-day test case",
    price: 949,
    status: "InStock",
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/_/6/_600x600__crop_600_asus_rog_phone2_min_1.jpg",
    title: "ASUS ROG Phone 2512GB",
    description: "Fullbox,body,box,charger,cable.Support installing romTV + back up to 12 month warranty",
    price: 880,
    status: "InStock",
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/3/636675937265892591_nova3i-xanh-1.jpg",
    title: "Huawei nova 31",
    description: "Fullbox,body,box + Backed up to 12 months warranty with a premium package",
    price: 179,
    status: "InStock",
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/6/3/636753307469671737_huawei-mate20-xanhden-1_1_2.jpg",
    title: "Huawei Mate 20",
    description: "Fullbox,body,box + Backed up to 12 months warranty with a premium package",
    price: 49,
    status: "InStock",
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/11/636828015979564724_ipad-pro-12-9-xam-1.png",
    title: "Ipad pro 12.9'' 4G + Wifi",
    description: "iPad Pro 12.9'' 4G + Wifi iPad are all 100% genuine international versions with 36 months warranty",
    price:
      999,
    status: "InStock",
    model: "tablet",
  }),
  new Product({
    imagePath: "https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg",
    title: "iPhone X",
    description: "iPhone X Plus International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 699,
    status: "InStock",
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg",
    title: "iPhone 8 Plus",
    description: "iPhone 8 Plus International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 659,
    status: "InStock",
   
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_7_plus_128gb.jpg",
    title: "iPhone 7 Plus",
    description: "iPhone 7 PlusInternational - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 599,
    status: "InStock",
    
    model: "iphone",
  }),
  new Product({
    imagePath: "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/6/s/6s_rose_2.jpg",
    title: "iPhone 6s Plus",
    description: "iPhone 6s Plus International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 549,
    status: "InStock",
    
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_7_plus_128gb.jpg",
    title: "iPhone 7",
    description: "iPhone 7 International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 569,
    status: "InStock",
  
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    title: "iPhone 6",
    description: "iPhone 6 International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 399,
    status: "InStock",
   
    model: "iphone",
  }),
  new Product({
    imagePath: "https://stcv4.hnammobile.com//uploads/products/colors/3/apple-iphone-5-se-32gb-cu-99-01556792746.jpg",
    title: "iPhone 5 SE",
    description: "iPhone 5 SE International - Product form: Rank A - Backed up to 12 months warranty with a premium package",
    price: 299,
    status: "InStock",
    
    model: "iphone",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/210441/oppo-a5-2020-white-600x600.jpg",
    title: "OPPO A5 (2020) 64GB",
    description: "Runs on Android v8.1(Oreo) operating system (Freeship + 36 month warranty)",
    price: 185,
    status: "InStock",
    
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-600x600.jpg",
    title: "Samsung Galaxy Fold",
    description: "0% interest in stallment with Home Credit.30% prepayment, 6 month term",
    price:
      2000,
    status: "InStock",
    
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-600x600.jpg",
    title: "Samsung Galaxy Note 9",
    description: "0% interest in stallment with Home Credit.30% prepayment, 6 month term",
    price:
      990,
    status: "InStock",
    
    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/195012/samsung-galaxy-a70-white-600x600.jpg",
    title: "Samsung Galaxy A70",
    description: "0% interest in stallment with Home Credit.30% prepayment, 6 month term",
    price:
      399,

    status: "InStock",
   

    model: "android",
  }),
  new Product({
    imagePath: "https://cdn.tgdd.vn/Products/Images/42/204404/samsung-galaxy-a20s-black-600x600.jpg",
    title: "Samsung Galaxy A20s 64GB",
    description: "New samsung phone with a 6.40-inch touch screen display with a resolution of 720x1560 pixels.",
    price:
      219,
    status: "InStock",
 
    model: "android",
  }),
  new Product({

    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/11/636827999346152175_ipad-pro-11-wi-fi-xam-1.png",
    title: "iPad Pro 11 inch 4G + Wifi",
    description: "iPad Pro 11 inch 4G + Wifi are all 100% genuine international versions with 36 months warranty",
    price:
      899,

    status: "InStock",
   

    model: "tablet",
  }),
  new Product({
    imagePath: "https://ilounge.ua/files/products/apple-silicone-case-charcoal-gray-ipad-pro-9-7-2.1000x1000.jpg",
    title: "iPad Pro 9.74 G + WIFI",
    description: "iPad Pro 11 ich 4G + Wifi are all 100% genuine international versions with 36 months warranty",
    price:
      899,

    status: "InStock",
    
    model: "tablet",
  }),
  new Product({
    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/7/4/636663192821960051_ipad-2018-4.jpg",
    title: "iPad 2018 4G + WIFI",
    description: "iPad 2018 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      699,
    
    status: "InStock",
   
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://product.hstatic.net/1000353777/product/apple-ipad-2017-32gb-wifi--4g-ivvgb.png",
    title: "iPad 2017 4G + WIFI",
    description: "iPad 2017 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      499,
    
    status: "InStock",
 
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/ipad-mini-4-16gb-wifi-4g-vang-didongviet_1_2.jpg",
    title: "iPad Mini 4 4G + WIFI",
    description: "iPad Mini 4 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      359,
    
    status: "InStock",
  
    model: "tablet",
  }),
  new Product({
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/ipad-mini-4-16gb-wifi-4g-vang-didongviet_1_2.jpg",
    title: "iPad Air 2 4G + WIFI",
    description: "iPad Air 2 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      329,
    
    status: "InStock",
  
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://didongviet.vn/pub/media/catalog/product//i/p/ipad-mini-4-16gb-wifi-4g-vang-didongviet_1_2.jpg",
    title: "iPad Mini 3 4G + WIFI",
    description: "iPad Mini 3 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      299,
    
    status: "InStock",
  
    
    model: "tablet",
  }),
  new Product({
    imagePath: "https://sw001.hstatic.net/7/1320b5e13c04ba/ipad-air-2-space-gray-cellular-hai-phong-gia-re_master.jpg",
    title: "iPad Air 4G + WIFI",
    description: "iPad Air 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      205,
    
    status: "InStock",
   
    
    model: "tablet",
  }),
  new Product({
    imagePath: "https://sw001.hstatic.net/7/1320b5e13c04ba/ipad-air-2-space-gray-cellular-hai-phong-gia-re_master.jpg",
    title: "iPad Mini 2 4G + WIFI",
    description: "iPad Mini 2 4G + WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      159,
    status: "InStock",
   
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://sw001.hstatic.net/7/1320b5e13c04ba/ipad-air-2-space-gray-cellular-hai-phong-gia-re_master.jpg",
    title: "iPad Mini 1 Only WIFI",
    description: "iPad Mini 1 Only WIFI are all 100% genuine international versions with 36 months warranty",
    price:
      120,
    
    status: "InStock",
   
    
    model: "tablet",
  }),
  new Product({    
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._SL1500_.jpg",
    title: "Apple Watch Serries 5 GPS",
    description: "STATUS: 100% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      520,
    
    status: "InStock",
 
    
    model: "watch",
  }),
  new Product({    
    imagePath: "https://www.trumiwatch.vn/wp-content/uploads/2019/05/apple-watch-series-3-thep-LTE-2.jpg",
    title: "Apple Watch 3 LTE - 99%",
    description: "STATUS: 99% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      240,
    
    status: "InStock",
  
    
    model: "watch",
  }),
  new Product({    
    imagePath: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FQK32?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1523395264885",
    title: "Apple Watch 3 GPS - NEW",
    description: "STATUS: 100% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      200,
    status: "InStock",
   
    model: "watch",
  }),
  new Product({
    imagePath: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/9/14/636725447622444194_MU642VNA%201.png",
    title: "Apple Watch 4 GPS NEW",
    description: "STATUS: 100% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      100,
    status: "InStock",
    
    model: "watch",
  }),
  new Product({
    imagePath: "https://product.hstatic.net/1000367970/product/apple-watch-series-4-new-100_ban-nhom-gps-40-mm-hong_b3d58361b1bc408baecdc9f1f386a5a4_master.jpeg",
    title: "Apple Watch 4 (LTE) - 99%",
    description: "STATUS: 99% New Goods Fullbox- COLORS: Full color- WARRANTY: Genuine goods are warranted for 12 months nationwide ...",
    price:
      50,
    status: "InStock",

    model: "watch",
  }),

  new Product({
    imagePath: "https://iremax.vn/wp-content/uploads/2019/04/op-dien-thoai-rm-1613-remax-12.jpg",
    title:"Case for Iphone XS MAX",
    description: "Our clear iPhone Xs Max cases are designed for the absolute minimalists. These clear iPhone cases are here to keep your iPhone fresh and authentic along with optimal protection. No FOMO, our clear iPhone cases are available in all case types.",
    price: 10 ,
    status: "InStock",
    
    model: 'accessories'
    }),
    
  new Product({
    imagePath: "http://phukiengalaxy.com.vn/wp-content/uploads/2019/05/%E1%BB%91p-l%C6%B0ng-A70-gi%E1%BA%A3-da-gi%C3%A1-r%E1%BA%BB.jpg",
    title:"Leather Case",
    description: "Meet our leather iPhone Xs Max cases. The leather iPhone Xs Max case provides a luxurious look and offers extra resistant grip. Personalise your leather iPhone Xs Max case with initials to make it more luxe.",
    price: 17  ,
    status: "InStock",
 
    model: 'accessories'
    }),

  new Product({
    imagePath: "https://ae01.alicdn.com/kf/Hd9efa41837534b84ab6d4428c4a5db27k/Cho-Iphone-11-Pro-Max-D-Quang-Neon-C-t-L-ng-L-p-L-nh.jpg_q50.jpg",
    title:"Neon Case",
    description: "Our iPhone Xs Max case glows in the dark and is available in the four fun color combos. FYI the neon sand liquid phone case bumper is made of shockproof TPU, which provides optimal protection to your iPhone Xs Max.",
    price: 7 ,
    status: "InStock",
 
    model: 'accessories'
    }),

  new Product({
    imagePath: "https://i.pinimg.com/originals/8c/21/c2/8c21c29719c5628e5ee9a04175150c01.jpg",
    title:"Prints Case",
    description: "Looking for the iPhone Xs Max case to show off your style? Choose from our signature prints collection and match with your OOTD.",
    price: 10 ,
    status: "InStock",
  
    model: 'accessories'
    }),

  new Product({
    imagePath: "https://nettacase.com/image/5aec04e951046d10a56ae311/big",
    title:"Glitter case ",
    description: "Time to shake things up! Our well-loved liquid glitter iPhone Xs Max cases feature floating, sparkly liquid glitter pieces for a dreamy, snowglobe-like effect. Made of non-toxic mineral oil and materials, all liquid glitter iPhone Xs Max cases are certified for 100% quality + safety. Shine on.",
    price: 9 ,
    status: "InStock",
   
    model: 'accessories'
    }),

  new Product({
    imagePath: "http://soloyo.vn/blog/wp-content/uploads/2018/12/%E1%BB%91p-ch%E1%BB%AF-k%C3%BD-300x300.jpg",
    title:"The Essential Case",
    description: "The Essential Case is crafted with the toughest materials offering 360 degrees of protection with drop proof materials and an extra layer of shock absorption. Trendy designs deserve the custom treatment, so add your name, initials or favorite word to make this luxury print your perfect personalized accessory.",
    price: 13 ,
    status: "InStock",
   
    model: 'accessories'
    }),

  new Product({
    imagePath: "https://cdn-image02.casetify.com/img/system_item/16000399/~v1/slide_1.jpg",
    title:"USB-C Lightning Cable",
    description: "CASETiFY's connectors are ultra strong, for a hassle-free experience. With 1.2M of length, you can charge your baby up without the fear of a tangled mess, supporting 3A fast charging! BTW, our USB-C USB cables are crafted with high quality metal connectors, offering MFi standard lightning capabilities. Yeah, we're that good.",
    price: 13 ,
    status: "InStock",
    
    model: 'accessories'
    }),

  new Product({
    imagePath: "https://cdn-image02.casetify.com/usr/16223/4396223/~v7/6496290_wireless-charging-pad_16000024.png.560x560-w.m80.jpg",
    title:"Wireless Charging pad",
    description: "Introducing the best addition to your tech gadget collection; our signature Saffiano Wireless Charging Pad. As convenience goes, our wireless charging pad can't be beat. You simply drop your phone onto the wireless charging pad and walk away. Gone is the headache of managing charging cables that inevitably break or get lost. BTW, it's compatible with all phones and devices like Apple AirPods 2 that support wireless charging.",
    price: 35 ,
    status: "InStock",
  
    model: 'accessories'
    }),

  new Product({
    imagePath: "https://cdn-stamplib.casetify.com/cms/image/e759c83bae27a1970f44de5c3789ee9b.jpg",
    title:"Tempered Glass",
    description: "Only 0.33mm, the ultra-thin iPhone 11 Pro / Xs / X tempered glass screen protector enables precise touchscreen sensitivity without compromising protection. Its polished, scratch-resistant surface helps reduce the chances of your screen breaking or cracking. ",
    price: 15 ,
    status: "InStock",
    
    model: 'accessories',
    }),

  new Product({
    imagePath: "https://cdn-image02.casetify.com/usr/9516/2769516/~v7/6561366_iring_80021.png.560x560-w.m80.jpg",
    title:"Ring Holder",
    description: "he phone ring is offered in rose gold and black and it sticks securely on the back of any CASETiFY phone cases. Now you can stay worry-free when you go around holding your phone with one hand. Texting, taking your selfies and IG stories have never been easier with CASETiFY phone ring. Serving as literally an phone grip holder, we used a material that is smooth and sleek, which guarantees a comfy all day wear.",
    price: 5 ,
    status: "InStock",
   
    model: 'accessories'
    }),  

  new Product({
    imagePath: "https://nytshop.com/images/thumbs/001/0013152_tai-nghe-steelseries-siberia-200-white_600.jpeg",
    title: "SteelSeries Siberia 200 White",
    description: "",
    price: 99.99,
    status: "In Stock",
   
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://tainghe.com.vn/media/news/2604_XuanVuAudio-zx310-ap-6.jpg",
    title: "Sony ZX310AP Black",
    description:   "From Sony - Light weight - Flexible design",
    price: 49.99,
    status: "In Stock",
   
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://salt.tikicdn.com/cache/550x550/media/catalog/product/h/d/hd-559-1.u2470.d20161227.t113312.526099.jpg",
    title: "Sennheiser HD 559",
    description:   "From Sennheiser - Comfortable - Open design",
    price: 149.99,
    status: "In Stock",
  
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/41OP927d54L.jpg",
    title: "Sony MDR-XB550AP Red",
    description:   "From Sony - Comfortable - Fashion design - Light weight",
    price: 49.99,
    status: "In Stock",

    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/51JICE%2BqK9L._AC_SL1000_.jpg",
    title: "COWIN SE7",
    description:   "Professional Active Noise Cancelling (ANC) Technology - Comfortable - Fashion design - Amazing Sound with AptX Hi-Fi Technology - High-quality Built-in Microphone and Bluetooth 5.0 ",
    price: 109.99,
    status: "In Stock",
 
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/61oEU8lUE9L._AC_SL1001_.jpg",
    title: "COWIN E7",
    description:   "Professional Active Noise Cancelling Technology - Comfortable - Proprietary 40mm Large-aperture Drivers. Deep, accurate bass response - Amazing Sound with AptX Hi-Fi Technology - High-quality Built-in Microphone and NFC Technology ",
    price: 59.99,
    status: "In Stock",
 
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/61S3vMe2vgL._AC_SL1280_.jpg",
    title: "Mpow 059",
    description:   "IMPRESSIVE SOUND QUALITY IS THE ULTIMATE GOAL - BUILT TO STAY COMFORTABLE - NEVER POWER OFF, BOTH WIRELESS & WIRED - FOLDABLE DESIGN WITH A PORTABLE BAG & GENTLE REMINDER ",
    price: 36.99,
    status: "In Stock",

    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/71SUYBmMsRL._AC_SL1500_.jpg",
    title: "Vogek On Ear Headphones",
    description:   "40 mm driver units of the on ear headphones deliver full, balanced sound - Designed with padded headband, cushioned & pressure-relieving ear pads that rest comfortably on your ears - The perfect portable on ear headphones offer sleek style and an excellent on-the-go choice for keeping you in sync with sound that inspires - In-line microphone for hands-free phone calling ",
    price: 16.99,
    status: "In Stock",
    
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/71SUYBmMsRL._AC_SL1500_.jpg",
    title: "Elecder i39",
    description:   "EXCELLENT SOUND - DURABLE & NOT TANGLE - Built in Microphone - ADJUSTABLE & ESAY TO CARRY - PRPTECTION ",
    price: 11.99,
    status: "In Stock",
    
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/71qNnPAiAAL._AC_SL1500_.jpg",
    title: "PeohZarr On-Ear Headphones",
    description:   "Immerse yourself into the beat - Designed for maximum comfort - Durable and folding design - Easy in-line control with microphone -HAPPY CUSTOMERS ",
    price: 19.99,
    status: "In Stock",
   
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/61JxBr0UreL._AC_SL1200_.jpg",
    title: "Sony MDRZX110",
    description:   "30 millimeter drivers for rich, full frequency response - Lightweight and comfortable on ear design - Swivel design for portability - 47 ¼ inch (1.2 meter) tangle free, Y type cord",
    price: 29.99,
    status: "In Stock",
    
    model: 'speaker'
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/715zHo%2Bm1tL._AC_SL1500_.jpg",
    title: "AILIHEN C8",
    description:   "Collapsible feature - Hands-free talking and volume control - Adjustable hinge - Noise isolation - Widely compatible",
    price: 19.99,
    status: "In Stock",
    model: 'speaker'
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
