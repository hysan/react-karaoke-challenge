import React from 'react';

const SongList = (props) => {
  console.log(props)
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
          <th>Play Count</th>
        </tr>

        {props.songList.map(song => {
          return <tr>
            <td>{song.title}</td>
            <td>{song.singer}</td>
            <button onClick={props.loadLyrics} value={song.id}>play</button>
            <td></td>
          </tr>

        })}

      </tbody>
    </table>
  )
}

export default SongList;
