import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input 
          value={this.props.inputValue}
          id="title-filter" 
          type="text"
          onChange={(e) => this.props.handleInputValue(e.target.value)}
        />
      </div>
    );
  }
}

export default Filter;
