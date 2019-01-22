import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={this.props.filterSongs} id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;
