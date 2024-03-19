require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("DataBase Connected");
  } catch (error) {
    console.log("error:", error);

  }
};

module.exports=connectDB 