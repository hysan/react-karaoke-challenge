import React from 'react';
import Song from './Song';

const SongList = (props) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {props.songs.map(song => <Song key={song.id} title={song.title} singer={song.singer} />)}

      </tbody>
    </table>
  )
}

export default SongList;
