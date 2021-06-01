import React from "react";

const ListGroup = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div>
      <ul className="list-group m-2">
        {categories.map((category) => {
          return (
            <li
              key={category._id}
              onClick={() => onCategorySelect(category)}
              className={
                category === selectedCategory
                  ? "list-group-item list-group-action text-center py-3 active"
                  : "list-group-item list-group-action text-center py-3"
              }
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
