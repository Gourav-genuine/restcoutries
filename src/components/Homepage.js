import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";

export class Homepage extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchBar />
      </>
    );
  }
}

export default Homepage;
