import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.lyrics}</h2>
      <Lyrics lyrics= {props.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
