import React from 'react';
import songs from '../data/songs';

const SongList = () => {
  return (
    <div className="song-list">
      {/* Your Code Goes Here */}
      {songs.map(song => <p key={song.id}>{song.title}</p>)}
    </div>
  )
}

export default SongList;
