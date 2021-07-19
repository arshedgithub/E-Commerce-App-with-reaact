import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, quantity, onDelete }) => {
  return (
    <React.Fragment>
      <td>{item._id} </td>
      <td>{item.name}</td>
      <td>{quantity}</td>
      <td>{item.price}</td>
      <td>{item.price}</td>
      <td style={{ cursor: "pointer" }} onClick={() => onDelete(item._id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </td>
    </React.Fragment>
  );
};

export default CartItem;
