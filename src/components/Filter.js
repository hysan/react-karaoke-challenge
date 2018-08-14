import React, { Component } from 'react';

class Filter extends Component {
  
  handleChange = (event) => {
    console.log(this.props.filter);
    this.props.searchFilter(event.target.value)
  }
  
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" value={this.props.filter} onChange={this.handleChange} type="text" />
      </div>
    );
  }
}

export default Filter;
