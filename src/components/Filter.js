import React, { Component } from 'react';

class Filter extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    }, () => this.props.handleFilter(this.state.value))
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Filter;
