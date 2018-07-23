import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" name="title" type="text" onChange={this.props.songFilter}/>
      </div>
    );
  }
}

export default Filter;
