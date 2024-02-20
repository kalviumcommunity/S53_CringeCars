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
module.exports=router
