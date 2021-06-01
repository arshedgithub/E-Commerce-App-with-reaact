import React, { Component } from "react";
import { getItems, getTitles } from "./../services/fakeDB";
import ListGroup from "./common/listGroup";
import Item from "./common/item";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({
      products: getItems(),
      categories: [{ _id: "", name: "All Categories" }, ...getTitles()],
    });
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { products, currentPage, pageSize, selectedCategory } = this.state;

    const filtered =
      selectedCategory && selectedCategory._id
        ? products.filter((c) => c.title[0] === selectedCategory._id)
        : products;

    const items = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, items };
  };

  render() {
    const { categories, currentPage, pageSize } = this.state;
    const { totalCount, items } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            categories={categories}
            onCategorySelect={this.handleCategorySelect}
            selectedCategory={this.state.selectedCategory}
          />
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
