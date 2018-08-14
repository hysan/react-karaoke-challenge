import React, { Component } from 'react';
import Song from './Song'



function fetchSongs(){}

export default class SongList extends Component{


  mapSongs = (songArray) => {
    return songArray.map(songObj =>
      <Song handleClick={this.props.handleClick} id={songObj.id} title={songObj.title} singer={songObj.singer} lyrics={songObj.lyrics} plays={songObj.plays} likes={songObj.likes} dislikes={songObj.dislikes}  />
    )
  }


  render(){
    return (
      <table className="song-list">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Singer</th>
            <th>▶</th>
          </tr>

          {this.mapSongs(this.props.songs)}

        </tbody>
      </table>
    )
  }

}
