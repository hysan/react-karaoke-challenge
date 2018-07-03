import React from 'react';
import Song from './Song';
import UUID from 'uuid';

const SongList = (props) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          {
            props.playSong ?
              <React.Fragment>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Plays</th>
                <th>▶</th>
              </React.Fragment>
            :
              null
          }
        </tr>

        {props.songs.map(song => {
          return (
            <Song
              key={UUID()}
              id={song.id}
              title={song.title}
              singer={song.singer}
              likes={song.likes}
              dislikes={song.dislikes}
              plays={song.plays}
              playSong={props.playSong}
            />
          )
        })}

      </tbody>
    </table>
  )
}

export default SongList;
