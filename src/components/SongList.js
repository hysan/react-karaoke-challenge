import React from 'react';
import Song from '../components/Song'
const SongList = (props) => {
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

        {props.songs.map(song =>
          <tr className="song" id={song.id}>
            <td>{song.title}</td>
            <td>{song.singer}</td>
            <td>{song.likes}</td>
            <td>{song.dislikes}</td>
            <td>{song.plays}</td>
            <Song songId={song.id} playChange={props.play}/>
          </tr>
        )}
        
      </tbody>
    </table>
  )
}

export default SongList;
