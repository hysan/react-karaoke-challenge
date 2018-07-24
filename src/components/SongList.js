import React from 'react';
import Song from './Song';

// WhateverList
// - Whatever
// - WhateverItem
const SongList = (props) => {

  // console.log(props);
  function renderSongs() {
    return props.songs.map(song => {
      return (
        <Song
          key={song.id}
          id={song.id}
          title={song.title}
          singer={song.singer}
          handleClick={props.handleClick}
        />
      )
    })
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
