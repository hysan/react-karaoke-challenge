import React from 'react';
import Song from './Song'; 

const SongList = ({songs, onPlayClick}) => {

  const renderAllSongs = () => {
    let counter = 0; 
    return songs.map( song => <Song song={song} onPlayClick={onPlayClick} idx={counter} key={counter++}/>)
  }

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
        {renderAllSongs()}
        
      </tbody>
    </table>
  )
}

export default SongList;
