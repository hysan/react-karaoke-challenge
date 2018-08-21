import React from 'react';
import Song from './Song.js'

// displaySongArtist = () => {
//   
// }

function displaySong(songs, selectedSong){
  return songs.map(song =>  <Song onClick={selectedSong} song={song} />)
}

const SongList = ({songs, selectedSong}) => {
  
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
          {displaySong(songs, selectedSong)}
      </tbody>
    </table>
  )
}

export default SongList;
