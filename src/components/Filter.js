import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    }, () => this.callHandleSearch())
  }

  callHandleSearch = () => {
    this.props.handleSearch(this.state.search)
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Filter;
