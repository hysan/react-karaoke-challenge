import React, { Component } from 'react';
import Song from './Song'

class SongList extends Component {

songMapper = () => {
  return this.props.songs.map(song => <Song key={song.id} song={song} currentSong={this.currentSong}/>)
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


currentSong = (song) => {
    this.props.establishCurrentSong(song)
  }

}

export default SongList;
