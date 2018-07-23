import React from 'react';
import Song from './Song'
import uuid from 'uuid';

const songGenerator = (songs,play) => {
  return songs.map(song => {
    return (
      <Song song={song} play={play} key={uuid()}/>
    )
  })
}

const SongList = (props) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {songGenerator(props.songs,props.play)}        

      </tbody>
    </table>
  )
}

export default SongList;
