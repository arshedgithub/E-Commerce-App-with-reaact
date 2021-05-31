import React, { Component } from "react";
import { getItems, getTitles } from "./../services/fakeDB";
import ListGroup from "./common/listGroup";
import Item from "./common/item";

class Products extends Component {
  state = {
    items: [],
    categories: [],
  };

  componentDidMount() {
    this.setState({ items: getItems(), categories: getTitles() });
  }

  render() {
    const { items, categories } = this.state;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup categories={categories} />
        </div>
        <div className="col">
          <p>Showing {items.length} products</p>
          {items.map((item) => (
            <div key={item._id}>
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
