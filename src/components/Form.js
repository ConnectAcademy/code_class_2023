import React, { useState } from "react";
// import axios from "axios";
import Input from "./Input";
import { createNewCar } from "../services/carsServices";

const Form = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const addCar = () => {
    const data = {
      manufacturer: manufacturer,
      brand: brand,
      year: year,
    };
    // mozime da pravime povici direkno, bez vejke konfigururan axios
    // axios
    //   .post("http://localhost:3001/cars", data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    createNewCar(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="formContainer">
      <h3>Please enter car details</h3>
      <Input
        placeholder="Enter car manufacturer"
        value={manufacturer}
        setValue={setManufacturer}
      />
      <Input placeholder="Enter car brand" value={brand} setValue={setBrand} />
      <Input placeholder="Enter car year" value={year} setValue={setYear} />
      <button onClick={addCar}>Submit</button>
    </div>
  );
};

export default Form;
