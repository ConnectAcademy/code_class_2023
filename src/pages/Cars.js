import React, { useEffect, useState } from "react";
import AppContainer from "../components/AppContainer";
// import axios from "axios";
import { getAllCars } from "../services/carsServices";

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    // mozime direkno da povikame bez da konfigurirame servis
    // axios.get("http://localhost:3001/cars").then((res) => setCars(res.data));
    getAllCars()
      .then((res) => setCars(res))
      .catch((e) => console.log(e));
  }, []);
  console.log(cars);
  return (
    <AppContainer>
      {cars.map((car) => (
        <div key={car.id} className="carCard">
          <p>Manufacturer: {car.manufacturer}</p>
          <p>Brand: {car.brand}</p>
          <p>Year: {car.year}</p>
        </div>
      ))}
    </AppContainer>
  );
};

export default Cars;
