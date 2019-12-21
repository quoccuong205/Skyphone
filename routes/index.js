var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');
var Order = require('../models/order');

/* GET home page. */
router.get('/', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});


router.get("/iphone-quoc-te", function(req, res, next) {
    Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 4;
      var docs1= [];
      for (var i = 0; i< docs.length; i++){
        if (docs[i].model == 'iphone'){
          docs1.push(docs[i]);
        }
      }
      for (var i = 0; i < docs1.length; i += chunkSize) {
        
        productChunks.push(docs1.slice(i, i + chunkSize));
      }
      res.render("shop/category", { products: productChunks });
    });
  });
  
  router.get("/dien-thoai-android", function(req, res, next) {
    Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 4;
      var docs1= [];
      for (var i = 0; i< docs.length; i++){
        if (docs[i].model == 'android'){
          docs1.push(docs[i]);
        }
      }
      for (var i = 0; i < docs1.length; i += chunkSize) {
        
        productChunks.push(docs1.slice(i, i + chunkSize));
      }
      res.render("shop/category", { products: productChunks });
    });
  });
  
  router.get("/may-tinh-bang", function(req, res, next) {
    Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 4;
      var docs1= [];
      for (var i = 0; i< docs.length; i++){
        if (docs[i].model == 'tablet'){
          docs1.push(docs[i]);
        }
      }
      for (var i = 0; i < docs1.length; i += chunkSize) {
        
        productChunks.push(docs1.slice(i, i + chunkSize));
      }
      res.render("shop/category", { products: productChunks });
    });
  });
  
  router.get("/dong-ho", function(req, res, next) {
    Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 4;
      var docs1= [];
      for (var i = 0; i< docs.length; i++){
        if (docs[i].model == 'watch'){
          docs1.push(docs[i]);
        }
      }
      for (var i = 0; i < docs1.length; i += chunkSize) {
        
        productChunks.push(docs1.slice(i, i + chunkSize));
      }
      res.render("shop/category", { products: productChunks });
    });
  });
  
  router.get("/phu-kien", function(req, res, next) {
    Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 4;
      var docs1= [];
      for (var i = 0; i< docs.length; i++){
        if (docs[i].model == 'accessories'){
          docs1.push(docs[i]);
        }
      }
      for (var i = 0; i < docs1.length; i += chunkSize) {
        
        productChunks.push(docs1.slice(i, i + chunkSize));
      }
      res.render("shop/category", { products: productChunks });
    });
  });
  
  router.get("/loa-va-tai-nghe", function(req, res, next) {
    Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 4;
      var docs1= [];
      for (var i = 0; i< docs.length; i++){
        if (docs[i].model == 'speaker'){
          docs1.push(docs[i]);
        }
      }
      for (var i = 0; i < docs1.length; i += chunkSize) {
        
        productChunks.push(docs1.slice(i, i + chunkSize));
      }
      res.render("shop/category", { products: productChunks });
    });
  });
  
  router.get('/detail/:id',function(req, res, next){
    Product.find(function(err, docs){
      var x= req.params.id;
      var docs1= [];
      for (var i = 0; i< docs.length; i++){
        if (docs[i].id == x){
          docs1.push(docs[i]);
        }
      }
      console.log(docs1.length);
      res.render("shop/productdetail", {products: docs1});
    });
  });



router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});

router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
   if (!req.session.cart) {
       return res.render('shop/shopping-cart', {products: null});
   } 
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    
    var stripe = require("stripe")(
        "sk_test_q7j9JWoFaJTSQIQGXle641yG00Dwquh5aD"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    }); 
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}
