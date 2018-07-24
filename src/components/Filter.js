import React, { Component } from 'react';

class Filter extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     filter: "",
  //   }
  // }
  //
  // handleChange = (event) => {
  //   this.setState({
  //     filter: event.target.value,
  //   }, () => {
  //     this.props.handleFilter(this.state.filter);
  //   })
  // }

  render() {
    // console.log(this.state.filter);

    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          value={this.props.filter}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
