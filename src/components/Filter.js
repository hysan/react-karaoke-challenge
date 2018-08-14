import React, { Component } from 'react';

class Filter extends Component {

  state = {
    input: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    }, () => this.props.updateSongs(this.state.input))
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.state.input} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Filter;
