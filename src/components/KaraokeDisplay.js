import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.songPlay.title}</h2>
      <Lyrics lyrics={props.songPlay.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
