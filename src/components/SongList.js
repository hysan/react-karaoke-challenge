import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const songsArray = props.songs.map((song) => {
    return <Song song={song}/>
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {songsArray}
      </tbody>
    </table>
  )
}

export default SongList;
