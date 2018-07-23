import React from 'react';
import Song from './Song'; 

const SongList = ({songs, onPlayClick}) => {
  console.log("All Songs:", songs)

  const renderAllSongs = () => {
    let counter = 0; 
    return songs.map( song => <Song title={song.title} singer={song.singer} onPlayClick={onPlayClick} idx={counter} key={counter++}/>)
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
