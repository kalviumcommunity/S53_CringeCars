const express = require("express");
const router = express.Router();
const {CarModel, userModel} = require("./Schema");
router.use(express.json());


router.get("/Cars", async (req, res) => {
  try {
    const newcar = await CarModel.find();
    console.log("Newcar: ", newcar);
    res.send(newcar);
  } catch (err) {
    res.send({
      message: false,
      response: "please check the code here is the error.",
      error: err,
    });
  }
});

router.post("/cars/add", async (req, res) => {
  try {
     const { error } = carSchema.validate(req.body);
    const newCar = await CarModel.create(req.body);
    res.status(201).send(newCar);
  } catch (err) {
    res.status(400).send({
      message: false,
      response: "Error occurred while creating a new car.",
      error: err,
    });
  }
});

router.put("/cars/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCar = await CarModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCar) {
      return res.status(404).send({
        message: false,
        response: "Car not found.",
      });
    }
    console.log("Car updated: ", updatedCar);
    res.send(updatedCar);
  } catch (err) {
    res.status(400).send({
      message: false,
      response: "Error occurred while updating the car.",
      error: err,
    });
  }
});

router.delete("/cars/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCar = await CarModel.findByIdAndDelete(id);
    if (!deletedCar) {
      return res.status(404).send({
        message: false,
        response: "Car not found.",
      });
    }
    console.log("Car deleted: ", deletedCar);
    res.send({ message: true, response: "Car deleted successfully." });
  } catch (err) {
    res.status(400).send({
      message: false,
      response: "An Error was occurred while deleting the car.",
      error: err,
    });
  }
});

router.post("/user/add", async (req, res) => {
  try {
    // Validate request body against Joi schema
    const { error } = signUpSchema.validate(req.body);
    if (error) {
      // Return validation error if validation fails
      return res.status(400).json({ message: error.details[0].message });
    }

    const email = req.body.email;
    const checkUser = await userModel.findOne({ email: email });
    if (checkUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    // Handle other errors
    res.status(400).json({
      message: "Failed to add user",
      error: err.message,
    });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await userModel.findOne({ email: email });
    if (!checkUser) {
      return res.status(404).send({ message: "User not found" });
    }

    if (checkUser.password === password) {
      return res.send({ message: true });
    } else {
      return res.send({ message: false });
    }
  } catch (err) {
    return res.status(500).send({
      message: false,
      error: "Error occurred while logging in",
    });
  }
});


const Joi = require("joi");

const signUpSchema = Joi.object({
  username: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  gender: Joi.string().valid("male", "female", "other").required(),
});



const carSchema = Joi.object({
  img: Joi.string().required(),
  name: Joi.string().required(),
  rating: Joi.number().required(),
  year_of_launch: Joi.string().required(),
  price: Joi.string().required(),
  company: Joi.string().required(),
  mileage: Joi.number().required(),
});




module.exports=router
