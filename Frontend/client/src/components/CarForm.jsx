import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function CarForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3001/cars/add", data);
      toast.success("Car added successfully!");
      reset(); 
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <h2>Add New Car Data</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="car-image">Image Address:</label>
          <input
            type="text"
            id="img"
            {...register("img", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="car-name">Car Name:</label>
          <input
            type="text"
            id="car-name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="car-rating">Rating:</label>
          <input
            type="text"
            id="car-rating"
            {...register("rating", { required: true, min: 0, step: 0.1 })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="car-year">Year of Launch:</label>
          <input
            type="text"
            id="car-year"
            {...register("year_of_launch", {
              required: true,
              min: 1900,
              max: 2099,
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="car-price">Price:</label>
          <input
            type="text"
            id="car-price"
            {...register("price", { required: true, min: 0 })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="car-company">Company:</label>
          <input
            type="text"
            id="car-company"
            {...register("company", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="car-mileage">Mileage:</label>
          <input
            type="text"
            id="car-mileage"
            {...register("mileage", { required: true, min: 0 })}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CarForm;







