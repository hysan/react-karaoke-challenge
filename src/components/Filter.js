import React, { Component } from 'react';

class Filter extends Component {
  // state = {
  //   value: '',
  // }
  //
  // handleChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({ value: event.target.value }, () => this.props.callback(this.state.value) )
  // }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          value={this.props.searchTerm}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
