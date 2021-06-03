import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    console.log("error");
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  renderInput = (name, label, type = "text") => {
    // const { data, errors } = this.state;
    return <Input name={name} label={label} type={type} />;
  };

  renderButton = (name) => {
    return <button className="btn btn-primary m-2">{name}</button>;
  };
}

export default Form;
