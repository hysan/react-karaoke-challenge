import React, { Component } from 'react';
import Song from './Song.js'

class SongList extends Component {
  
  generateSongJSX = () => {
    return this.props.songObjs.map( songObj => {
      return (<tr key={songObj.id}>
                <td> {songObj.title} </td>
                <td> {songObj.singer} </td>
                <td> <button id={songObj.lyrics} className={songObj.title} onClick={this.handleClick}> Play </button> </td>
              </tr>
              )
    })
  }

  handleClick = (event) => {
    console.log(event.target.id)
    this.props.selectSong(event.target.id);
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

          {this.generateSongJSX()}
          
        </tbody>
      </table>
    )
  }
}

export default SongList;
