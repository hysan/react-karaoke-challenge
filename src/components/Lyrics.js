import React, { Component } from 'react';

class Lyrics extends Component {
  render() {
    return (
      <div className="lyrics">
        <p>{this.props.lyrics}</p>
      </div>
    );
  }
}

export default Lyrics;
