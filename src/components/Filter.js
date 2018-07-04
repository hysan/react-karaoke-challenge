import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          name="title"
          value={this.props.title}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
