import React from 'react';
import Song from './Song'; 

const SongList = ({songs}) => {
  console.log("All Songs:", songs)

  const renderAllSongs = () => {
    return songs.map( song => <Song title={song.title} singer={song.singer}/>)
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {renderAllSongs()}
        
      </tbody>
    </table>
  )
}

export default SongList;
