import React from 'react';
import Song from './Song'

const SongList = (props) => {
  // console.log(props.handlePlayButton)
  return (
    
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {props.songs.map(songObj => <Song key={songObj.id} song={songObj} handlePlayButton={props.handlePlayButton} />)}
        
      </tbody>
    </table>
  )
}

export default SongList;
