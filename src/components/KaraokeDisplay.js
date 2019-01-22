import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.onDisplay.title}</h2>
      <Lyrics lyrics={props.onDisplay.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
