import React, { Component } from 'react';

class Song extends Component {

  render() {
    return (
      <tr className="song">
        <td>{this.props.song.title}</td>
        <td>{this.props.song.singer}</td>
        <td><button onClick={this.clickPlay} value={this.props.song.lyrics}>Play</button></td>
      </tr>
    )
  }

///////////////////////////////////////////////////////////////////////////////////////////////

clickPlay = (event) => {
  let lyrics = event.target.value
  //console.log(lyrics)
  this.props.ifPlayClicked(event, lyrics)
}

}


export default Song;
