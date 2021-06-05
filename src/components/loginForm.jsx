import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  render() {
    return (
      <div
        className="border rounded shadow-lg m-5 p-5 m-auto text-center"
        style={{ maxWidth: "55vh" }}
      >
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <Link to="/products">{this.renderButton("Login")}</Link>
          <Link to="/register">{this.renderButton("Register")}</Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;
