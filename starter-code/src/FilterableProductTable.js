import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import data from "./data";

class FilterableProductTable extends Component {
  state = {
    products: data.data,
    inputField: "",
    checked: false
  };
  handleChange = evt => {
    this.setState({ inputField: evt.target.value });
  };

  notInStock = evt => {
    this.setState({ checked: evt.target.checked });
  };
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar clbk={this.notInStock} handleChange={this.handleChange} />
        <Table
          data={this.state.products}
          inputField={this.state.inputField}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
