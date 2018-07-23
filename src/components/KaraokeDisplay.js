import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = ({song}) => {
  return (
    <div className="karaoke-display">
      <h2>{song.title}</h2>
      <Lyrics lyrics={song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
