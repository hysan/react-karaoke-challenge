import React from 'react';
import uuid from 'uuid'
import Song from './Song'
const SongList = (props) => {




  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Play ▶ </th>
        </tr>

        {/* Your Code Goes Here */}
        {props.songs.map(song => <Song {...song} handlePlay = {props.handlePlay} />)}
      </tbody>
    </table>
  )
}

export default SongList;
