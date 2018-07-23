import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          onChange={event => this.props.filterHandle(event)}
          id="title-filter"
          type="text"
        />
      </div>
    );
  }
}

export default Filter;
