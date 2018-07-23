import React, { Component } from 'react';

class Filter extends Component {
  state = {
    searchInput: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => this.props.filterSongs(this.state.searchInput))
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
