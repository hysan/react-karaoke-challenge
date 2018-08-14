import React, { Component } from 'react';

class Filter extends Component {
  
  // how am i typing in the filter if state hasn't been preset?


  
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={this.props.handleFilter}/>
      </div>
    );
  }
}

export default Filter;
