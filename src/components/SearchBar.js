import React, { Component } from "react";
import { Input } from "antd";
import Dropdown from "./Dropdown";
import "./Dropdown.css";
import CardPage from "./CardPage";


export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state =({
      querry: "a",
      selected: "",
    });
  }

  componentDidUpdate() {
    console.log(this.state.querry);
  }

  search(text) {
    let text1 = text.toLowerCase();
    this.setState({ querry: text1 });
  }

  debounceSearch = (event) => {
    let querryText = event.target.value;
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    this.debounceTimeout = setTimeout(() => {
      this.search(querryText);
    }, 300);
  };
  selectedOption = (opt) => {
    console.log(opt)
    this.setState({ selected: opt })
  };

  render() {
    const { Search } = Input;
    return (
      <>
      
        <div>
          <div className="d-flex px-5 py-3 justify-content-between">
            <div>
              <input
                className="searchBox"
                placeholder="Search for a country..."
                onSearch={this.search}
                onChange={this.debounceSearch}
              />
            </div>
            <div>
              <div className="dropdown-main">
                <Dropdown fun={this.selectedOption} />
              </div>
            </div>
          </div>
          <CardPage filter={this.state.selected} name={this.state.querry}/>
          {console.log(this.state.querry)}
        </div>
      </>
    );
  }
}

export default SearchBar;
