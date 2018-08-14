import React, { Component } from 'react';

class Filter extends Component {

filterInput = (event) => {
  this.props.onChange(event.target.value)
}

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.props.search} onChange={this.filterInput}/>
      </div>
    );
  }
}

export default Filter;
