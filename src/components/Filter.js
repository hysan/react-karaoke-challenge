import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" name="search" type="text" value={this.props.searchValue} onChange={this.props.filterChange}/>
      </div>
    );
  }
}

export default Filter;
