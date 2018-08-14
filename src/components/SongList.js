import React from 'react';

const SongList = (props) => {

  // let createSongRows = (props) => {
  //   props.songData.map((id,song) => <tr key={song.id}><td>{song.title}</td><td>singer={song.singer}</td></tr>)
  // }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title=</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

      

      </tbody>
    </table>
  )
}

export default SongList;
