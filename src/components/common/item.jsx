import React from "react";

const Item = ({ item }) => {
  return (
    <div className="row border rounded py-1 m-2 mx-4">
      <div className="col m-3">
        <p>{item.name}</p>
        <p>Rs. {item.price}</p>
        <p>{item.numberInStock} in stock</p>
      </div>
      <div className="col-3 d-flex flex-row-reverse">
        <img src="https://via.placeholder.com/120" alt="placeholder" />
      </div>
    </div>
  );
};

export default Item;
