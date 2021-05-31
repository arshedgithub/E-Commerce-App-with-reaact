import React from "react";

const ListGroup = ({ categories }) => {
  //   const logging = (category) => {
  //     console.log(category);
  //   };

  return (
    <div>
      <ul className="list-group m-2">
        {categories.map((category) => {
          return (
            <li
              key={category._id}
              className="list-group-item list-group-action text-center"
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
