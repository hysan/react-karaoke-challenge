import React from 'react';
import Song from './Song';

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

        {props.songs.map(song => {
          const playSong = () => { props.playSong(song.id) };
          return (
            <Song
              key={song.id}
              title={song.title}
              singer={song.singer}
              likes={song.likes}
              dislikes={song.dislikes}
              plays={song.plays}
              playSong={playSong}
            />
          )
        })}

      </tbody>
    </table>
  )
}

export default SongList;
