import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const songsArray = props.songs.map((song) => {
    return <Song key={song.id} song={song} songToDisplay={props.songToDisplay}/>
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
          <th>Plays</th>
          <th>Likes</th>
          <th>Dislikes</th>
        </tr>
        {songsArray}
      </tbody>
    </table>
  )
}

export default SongList;
