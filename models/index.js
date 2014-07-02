var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Place, Hotel, ThingsToDo, Restaurant; // declare the models as variables
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone:  String,
  location: [Number, Number]
});

var hotelSchema = new Schema ({
  name: String,
  place: [placeSchema],
  num_stars:  Number,
  amenities: String
});

var todoSchema = new Schema ({
  name: String,
  place: [placeSchema],
  age_range: String
});

var restaurantSchema = new Schema ({
  name: String,
  place: [placeSchema],
  cuisine: String,
  price: Number
});

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingsToDo = mongoose.model('ThingsToDo', todoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Creates module which has defined our models s
module.exports = {"Place": Place, "Hotel": Hotel, "ThingsToDo": ThingsToDo, "Restaurant": Restaurant};