import React, { Component } from 'react';

class Filter extends Component {

  state = {
    currentSearchTerm: '',
  }

  handleChange = (event) => {
    // console.log(this.state)
    this.setState({
      currentSearchTerm: event.target.value
    }, () => {
      // console.log(this.state),
      this.props.searchHandler(this.state)
    })
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input value={this.state.currentSearchTerm} id="title-filter" type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Filter;
