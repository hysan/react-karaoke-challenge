//done
import React, { Component } from 'react';

class Filter extends Component {
  render() {
    //added onKeyUp event handler (uses props to access handleKeyUp in KaraokeContainer)
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onKeyUp={this.props.onKeyUp}/>
      </div>
    );
  }
}

export default Filter;
