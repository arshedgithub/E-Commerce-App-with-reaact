import React from "react";

const Item = ({ item }) => {
  return (
    <div className="border rounded p-4 m-3">
      <p>{item.title}</p>
      <p>{item.name}</p>
      <p>Rs. {item.price}</p>
    </div>
  );
};

export default Item;
