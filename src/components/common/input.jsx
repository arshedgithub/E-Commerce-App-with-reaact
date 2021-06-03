import React from "react";

const Input = ({ name, label, type }) => {
  return (
    <div className="form-group m-3">
      <label htmlFor={name} className="fs-5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-control m-auto"
      />
    </div>
  );
};

export default Input;
