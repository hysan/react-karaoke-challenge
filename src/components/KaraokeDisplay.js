import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.songToDisplay.title}</h2>
      <Lyrics lyrics={props.songToDisplay.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
