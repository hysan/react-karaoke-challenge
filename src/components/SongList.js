import React from 'react';
import Song from './Song'

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
          return <Song key={song.id} {...song} playSong={props.handlePlay}/>
        })}

      </tbody>
    </table>
  )
}

export default SongList;
