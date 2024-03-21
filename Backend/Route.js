const express = require("express");
const router = express.Router();
const CarModel = require("./Schema");
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
    const newCar = await CarModel.create(req.body);
    console.log("New car created: ", newCar);
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
      response: "Error occurred while deleting the car.",
      error: err,
    });
  }
});



module.exports=router
