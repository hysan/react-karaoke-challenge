import React, { Component } from 'react';

class Filter extends Component {

  render() {
    // console.log(this.state.input)
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          value={this.props.input}
          onChange={this.props.handleInputChange}
        />
      </div>
    );
  }
}

export default Filter;
