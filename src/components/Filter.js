import React, { Component } from 'react';

class Filter extends Component {
  constructor(props){
    super(props);

    this.state = { key: "value" }
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          value={this.props.query}
          onChange={this.props.onNewQuery}
          />
      </div>
    );
  }
}

export default Filter;
