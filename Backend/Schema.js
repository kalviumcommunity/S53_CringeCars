const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  img: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  year_of_launch: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  mileage: {
    type: String,
    require: true,
  }
});

const CarModel = mongoose.model("Cars List", schema);
module.exports = CarModel;
