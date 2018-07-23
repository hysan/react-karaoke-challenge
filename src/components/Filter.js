import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" onChange={this.props.onChange} type="text" />
      </div>
    );
  }
}

export default Filter;
