import React, { Component } from "react";
import { getItems } from "./../services/fakeDB";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: getItems() });
  }

  render() {
    const items = this.state.products;
    return (
      <div className="row">
        <div className="col-1 text-center">sidebar</div>
        <div className="col">
          <p>Showing {items.length} products</p>
          {items.map((item) => (
            <div>
              <div>{item._id}</div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
