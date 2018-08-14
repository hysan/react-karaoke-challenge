import React, { Component } from 'react';

class Song extends Component {

clickPlay = (event) => {
  event.preventDefault();
  this.props.currentSong(this.props.song)
}

  render() {
    return (
      <tr className="song">
        <td>{this.props.song.title}</td>
        <td>{this.props.song.singer}</td>
        <td><button onClick={this.clickPlay}>Play</button></td>
      </tr>
    )
  }

}


export default Song;
