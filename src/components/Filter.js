import React, { Component } from 'react';

class Filter extends Component {

  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => { this.props.filter(this.state.search)})
  }



  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" name="search" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Filter;
