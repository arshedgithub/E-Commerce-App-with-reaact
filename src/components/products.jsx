import React, { Component } from "react";
import { getItems, getTitles } from "./../services/fakeDB";
import ListGroup from "./common/listGroup";
import Item from "./common/item";
import Pagination from "./common/pagination";

class Products extends Component {
  state = {
    items: [],
    categories: [],
    currentPage: 1,
    pageSize: 2,
  };

  componentDidMount() {
    this.setState({ items: getItems(), categories: getTitles() });
  }

  render() {
    const { items, categories, currentPage, pageSize } = this.state;
    const totalCount = items.length;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup categories={categories} />
        </div>
        <div className="col">
          <p>Showing {totalCount} products</p>
          {items.map((item) => (
            <div key={item._id}>
              <Item item={item} />
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}

export default Products;
