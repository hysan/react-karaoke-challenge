import React, { Component } from 'react';

class Filter extends Component {
  constructor(props){
    super(props);

    this.state = { query: "" }
  }

  onNewQuery = (event) => {
    this.setState({query: event.target.value})
    console.log("Current search query", this.state.query)
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          value={this.state.query}
          onChange={this.onNewQuery}
          />
      </div>
    );
  }
}

export default Filter;
