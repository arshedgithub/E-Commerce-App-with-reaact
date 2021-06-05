import React from "react";

const Item = ({ item, onSelectItem }) => {
  return (
    <div className="row border rounded py-1 m-2 mx-4">
      <div className="col m-3">
        <p>{item.name}</p>
        <p>
          Rs. {item.price} &nbsp; &nbsp; &nbsp;
          <span className="text-muted" style={{ fontSize: "2vh" }}>
            ( {item.numberInStock} in stock )
          </span>
        </p>
        <button
          className="btn btn-sm btn-light border border-2 rounded"
          onClick={() => onSelectItem(item)}
        >
          Add to Cart
        </button>
      </div>
      <div className="col-3 d-flex flex-row-reverse">
        <img src="https://via.placeholder.com/120" alt="placeholder" />
      </div>
    </div>
  );
};

export default Item;
