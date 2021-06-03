import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item, onSelectItem }) => {
  return (
    <div className="row border border-2 rounded py-1 m-2 mx-4">
      <div className="col m-3">
        <p>{item.name}</p>
        <p>
          Rs. {item.price} &nbsp; &nbsp; &nbsp;
          <span className="text-muted" style={{ fontSize: "2vh" }}>
            ( {item.numberInStock} in stock )
          </span>
        </p>
        <Link to="/cart">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => onSelectItem(item._id)}
          >
            Add to Cart
          </button>
        </Link>
      </div>
      <div className="col-3 d-flex flex-row-reverse">
        <img src="https://via.placeholder.com/120" alt="placeholder" />
      </div>
    </div>
  );
};

export default Item;
