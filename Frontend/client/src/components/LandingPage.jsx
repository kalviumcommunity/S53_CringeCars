import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [updatedData, setUpdatedData] = useState("");
  const [selectedCarId, setSelectedCarId] = useState("");
  const [signin, setIsLoggedIn] = useState(false);
  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(5); 
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const accessTokenCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("access_token="));
    setIsLoggedIn(!!accessTokenCookie);
  });

  const fetchData = () => {
    axios
      .get("https://cringe-cars.onrender.com/Cars")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://cringe-cars.onrender.com/Cars/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    setSelectedCarId(id);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    setUpdatedData(e.target.value);
  };

  const handleUpdateConfirm = () => {
    if (updatedData <= 5) {
      const updatedCar = { rating: updatedData };

      axios
        .put(
          `https://cringe-cars.onrender.com/Cars/update/${selectedCarId}`,
          updatedCar
        )
        .then((res) => {
          console.log("Rating updated:", res.data);
          fetchData();
          handleClosePopup();
        })
        .catch((error) => {
          console.error("Error updating rating:", error);
        });
    } else {
      alert("Rating must be less than or equal to 5");
    }
  };

  const filterCarsByMileage = () => {
    return data.filter(
      (car) =>
        parseInt(car.mileage) >= minMileage &&
        parseInt(car.mileage) <= maxMileage
    );
  };

  const generateMileageOptions = () => {
    const options = [];
    for (let i = 0; i <= 50; i += 5) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <div className="container">
        <label>Minimum Mileage:</label>
        <select
          value={minMileage}
          onChange={(e) => setMinMileage(parseInt(e.target.value))}
        >
          {generateMileageOptions()}
        </select>

        <label>Maximum Mileage:</label>
        <select
          value={maxMileage}
          onChange={(e) => setMaxMileage(parseInt(e.target.value))}
        >
          {generateMileageOptions()}
        </select>
      </div>
      <div className="maincontainer">
        {filterCarsByMileage().map((car, i) => (
          <div className="card" key={i}>
            <img src={car.img} alt={car.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{car.name}</h5>
              <p className="card-text">Rating: {car.rating}/10</p>
              <p className="card-text">Year of Launch: {car.year_of_launch}</p>
              <p className="card-text">Price: ${car.price}</p>
              <p className="card-text">Company: {car.company}</p>
              <p className="card-text">Mileage: {car.mileage} kmpl</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <button
                  style={{ display: signin ? "block" : "none" }}
                  className="delete"
                  onClick={() => handleDelete(car._id)}
                >
                  Delete
                </button>
                <button
                  style={{ display: signin ? "block" : "none" }}
                  className="update"
                  onClick={() => handleUpdate(car._id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
        {showPopup && (
          <div className="popup-background">
            <div className="popup">
              <div className="popup-content">
                <input
                  type="text"
                  value={updatedData}
                  onChange={handleInputChange}
                  placeholder="Enter updated rating"
                />
                <button
                  className="update-confirm"
                  onClick={handleUpdateConfirm}
                >
                  Update
                </button>
                <button className="close" onClick={handleClosePopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
