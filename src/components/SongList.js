import React, { Component } from 'react';
import Song from './Song'

class SongList extends Component {

songMapper = () => {
  return this.props.songs.map(song => <Song key={song.id} song={song} ifPlayClicked={this.props.ifPlayClickedTopLevel}/>)
}

  render() {
    return (
      <table className="song-list">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Singer</th>
            <th>▶</th>
          </tr>
            {this.songMapper()}
        </tbody>
      </table>
    )
  }

/////////////////////////////////////////////////////////////////////////////////////////////////

  ifPlayClicked = (event, lyrics) => {
    console.log(event)
  this.props.ifPlayClickedTopLevel(lyrics)
}

}

export default SongList;
