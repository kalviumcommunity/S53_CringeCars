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






const signUpSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
});

const userModel =  mongoose.model("SignUp", signUpSchema);
module.exports = {CarModel, userModel};
