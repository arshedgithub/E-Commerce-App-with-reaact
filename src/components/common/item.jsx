import React from "react";

const Item = ({ item }) => {
  return (
    <div className="card p-3 m-2">
      <p>{item.title}</p>
      <p>{item.name}</p>
      <p>Rs. {item.price}</p>
    </div>
  );
};

export default Item;
