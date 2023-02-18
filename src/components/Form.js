import React, { useState } from "react";
import Input from "./Input";

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
    console.log(data);
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
