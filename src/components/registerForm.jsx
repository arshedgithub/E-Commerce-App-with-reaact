import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";

class Register extends Form {
  render() {
    return (
      <div className="m-5 p-2">
        <h2>Registeration</h2>
        <form style={{ maxWidth: "70vh" }} onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email")}
          <Link to="/products">{this.renderButton("Register")}</Link>
        </form>
      </div>
    );
  }
}

export default Register;
