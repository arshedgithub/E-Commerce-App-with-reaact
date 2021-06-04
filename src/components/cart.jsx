import { has } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./common/cartItem";

let cartItems = [];

const Cart = ({ location }) => {
  if (location.state) {
    let element = location.state.data;
    cartItems.push(element);
  }
  console.log(cartItems);

  if (cartItems.length == 0) {
    return (
      <div className="text-center">
        <h5>You didn't add anything yet</h5>
        <Link to="/products">
          <button className="btn btn-primary my-4">Add item</button>
        </Link>
      </div>
    );
  }

  const handleDelete = (ID) => {
    cartItems = cartItems.filter((t) => t._id !== ID);
    console.log(cartItems);
  };

  return (
    <div className="text-center m-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Amount</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <CartItem item={item} onDelete={handleDelete} />
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products">
        <button className="btn btn-primary my-4">Add item</button>
      </Link>
    </div>
  );
};

export default Cart;
