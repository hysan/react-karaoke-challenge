import React from 'react';

const SongList = props => {
  // console.log(props.songs)
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Times Played</th>
          <th>▶</th>
        </tr>

        {props.songs.map(song => {
          return (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.singer}</td>
              <td>{song.likes}</td>
              <td>{song.dislikes}</td>
              <td>{song.times_played}</td>
              <td><button onClick={() => props.clickedSong(song.id)}>Play</button></td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}

export default SongList;
