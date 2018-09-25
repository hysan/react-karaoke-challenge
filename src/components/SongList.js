import React from 'react';

const SongList = (props) => {

  const handlePlay = (event) => {
    props.playSong(Number(event.target.id))
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {props.songs.map(song => {
          return (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.singer}</td>
              <td>{song.likes}</td>
              <td>{song.dislikes}</td>
              <td>{song.plays}</td>
              <td><button id={song.id} onClick={handlePlay}>Play</button></td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}

export default SongList;
