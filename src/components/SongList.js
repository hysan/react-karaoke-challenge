import React from 'react';
import UUID from 'uuid';
import songs from '../data/songs';


const SongList = (props) => {

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {songs.map((individualSong) =>
        <tr key={UUID()}
        onClick={props.chooseCurrentSong}>
          <th>{individualSong.title}</th>
          <th>{individualSong.singer}</th>
          <th>▶</th>
        </tr>)}

      </tbody>
    </table>
  )
}

export default SongList;
