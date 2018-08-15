import React from 'react';
import Song from './Song';

const SongList = (props) => {
  function renderSongs() {
    return props.songs.map(song => (
      <Song
        key={song.id}
        {...song}
        song={song}
        handleClick={props.selectSong}
      />
    ));
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {renderSongs()}

      </tbody>
    </table>
  )
}

export default SongList;
