import _ from "lodash";
import React from "react";

const Pagination = ({ currentPage, totalCount, pageSize }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination mx-3">
      {pages.map((page) => {
        return (
          <li
            className={currentPage == page ? "page-item active" : "page-item"}
          >
            <a href="#" className="page-link">
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
