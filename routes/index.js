var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
// router.get('/', function(req, res) {
//   models.Hotel.find(function(err, hotels) {
//     models.Restaurants.find(function(err, restaurants) {
//       models.ThingsToDo.find(function(err, things) {
//         res.json({
//           hotels: hotels,
//           restaurants: restaurants,
//           things: things
//         });
//       });
//     });
//     res.render('index', { hotels: hotels, title: "Trip Planner" });
//   });
// });

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
      res.json({
          hotels: req.hotels,
          restaurants: req.restaurants,
          things: things
      });
      // res.render("index", {"object": res.json});
      // res.render("index", {"hotels": res.json.hotels, "restaurants": res.json.restaurants, "things": res.json.things});
      //res.render("index");
    });
  }
 ]);

/* Link to Home page */
router.get('/home', function(req, res) {
  res.render('home');
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
