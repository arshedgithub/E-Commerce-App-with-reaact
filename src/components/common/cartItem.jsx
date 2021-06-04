import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, onDelete }) => {
  return (
    <React.Fragment>
      <td>{item._id} </td>
      <td>{item.name}</td>
      <td>1</td>
      <td>{item.price}</td>
      <td>{item.price}</td>
      <td onClick={() => onDelete(item._id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </td>
    </React.Fragment>
  );
};

export default CartItem;
