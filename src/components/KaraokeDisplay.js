import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = () => {
  return (
    <div className="karaoke-display">
      <h2>Song Title</h2>
      <Lyrics lyrics="example song lyrics" />
    </div>
  )
}

export default KaraokeDisplay;
