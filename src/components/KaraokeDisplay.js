import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  console.log("Karaoke display", props.currentSong)
  return (
    <div className="karaoke-display">
      <h2>{props.currentSong.title}</h2>
      <Lyrics lyrics={props.currentSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
