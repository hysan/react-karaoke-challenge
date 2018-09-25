import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.props.filter} onChange={this.props.changeFilter} />
      </div>
    );
  }
}

export default Filter;
