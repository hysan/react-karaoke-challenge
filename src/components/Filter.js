import React, { Component } from 'react';

class Filter extends Component {
  state = {
    searchInput: "",
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  render() {
    console.log(this.state.searchInput);
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.state.searchInput} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Filter;
// {this.state.searchInput}
