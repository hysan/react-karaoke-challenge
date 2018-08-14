import React, { Component } from 'react';

class Filter extends Component {
  state = {
    title : ''
  }


  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })

  }


  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" id = "title" value = {this.state.title} onChange = {this.props.songFilter}/>
      </div>
    );
  }
}

export default Filter;
