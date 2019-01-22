import React, { Component } from 'react';

class Filter extends Component {
  render() {
    // console.log(this.props.songs);
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={(event)=> this.props.filterSong(event.target.value)} id="title-filter" type="text" value={this.props.filteredSongs} />
      </div>
    );
  }
}

export default Filter;
