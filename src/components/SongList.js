import React from 'react';
import Song from './Song'

const SongList = (props) => {

  const {songs} = props

  let handleClick = (event, song) => {
    props.onClick(song)
  }

  let renderSongs = songs.map((song) => {
    return (
     <Song song={song} onClick={(event) => handleClick(event, song)}/>
    )
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {/* Your Code Goes Here */}
        {renderSongs}

      </tbody>
    </table>
  )
}

export default SongList;
