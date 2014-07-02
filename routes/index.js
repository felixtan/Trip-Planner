var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', [
  function(req, res, next) {
    models.Hotel.find(function(err, hotels) {
      req.hotels = hotels;
      next();
    });
  },
  function(req, res, next) {
    models.Restaurant.find(function(err, restaurants) {
      req.restaurants = restaurants;
      next();
    });
  },
  function(req, res, next) {
    models.ThingsToDo.find(function(err, things) {
      var locals = {"hotels": req.hotels, "restaurants": req.restaurants, "things": things };

      res.render("index", locals);
    });
  }
 ]);

/* Home links to index */
router.get('/home', function(req, res) {
  res.render('index');
});

/* Link to About page */
router.get('/about', function(req, res) {
  res.render('about');
});

/* Link to Contact page */
router.get('/contact', function(req, res) {
  res.render('contact');
});

module.exports = router;
