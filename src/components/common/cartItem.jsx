import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, quantity, onDelete }) => {
  const [text, setText] = useState("text-dark");

  const muteText = () => {
    onDelete(item._id);
    setText("text-black-50");
  };

  return (
    <React.Fragment>
      <td className={text}>{item._id} </td>
      <td className={text}>{item.name}</td>
      <td className={text}>{quantity}</td>
      <td className={text}>Rs. {item.price}</td>
      <td className={text}>Rs. {item.price}</td>
      <td className={text} style={{ cursor: "pointer" }} onClick={muteText}>
        {text === "text-dark" ? (
          <FontAwesomeIcon icon={faTrashAlt} />
        ) : (
          "deleted"
        )}
      </td>
    </React.Fragment>
  );
};

export default CartItem;
