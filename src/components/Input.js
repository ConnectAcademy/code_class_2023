import React from "react";

const Input = ({ name, label, value, setValue, type = "text" }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
