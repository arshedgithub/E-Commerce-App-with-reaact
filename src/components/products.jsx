import React, { Component } from "react";
import { getItems, getTitles } from "./../services/fakeDB";
import ListGroup from "./common/listGroup";
import Item from "./common/item";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Footer from "./footer";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    currentPage: 1,
    pageSize: 3,
  };

  componentDidMount() {
    this.setState({ products: getItems(), categories: getTitles() });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { products, currentPage, pageSize } = this.state;

    const items = paginate(products, currentPage, pageSize);
    return items;
  };

  render() {
    const { products, categories, currentPage, pageSize } = this.state;
    const totalCount = products.length;
    const items = this.getPagedData();

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
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Products;
