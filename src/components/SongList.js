//done
import React from 'react';
import Song from './Song.js';

const SongList = (props) => {

  const renderSongList = () => {
    let renderedSongs = []
    props.songs.forEach(song => {
      renderedSongs.push(<Song title={song.title} singer={song.singer} onClick={props.onClick} song={song}/>)
    })
    return renderedSongs
  }
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {renderSongList()}

      </tbody>
    </table>
  )
}

export default SongList;
