import React, { forwardRef } from "react";

const Input = ({ placeholder, value, setValue }) => {
  return (
    <div className="input">
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
