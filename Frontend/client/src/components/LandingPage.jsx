import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cringe-cars.onrender.com/Cars")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="maincontainer">
        {data.map((car, i) => (
          <div className="card" key={i}>
            <img src={car.img} alt={car.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{car.name}</h5>
              <p className="card-text">Rating: {car.rating}/10</p>
              <p className="card-text">Year of Launch: {car.year_of_launch}</p>
              <p className="card-text">Price: ${car.price}</p>
              <p className="card-text">Company: {car.company}</p>
              <p className="card-text">Mileage: {car.mileage} kmpl</p>
              <button className="delete">Delete</button>
              <button className="update">Update</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
