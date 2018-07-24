import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  // console.log(props.currentSong.title);
  return (
    <div className="karaoke-display">
      <h2>{props.currentSong ? props.currentSong.title : null}</h2>
      <Lyrics lyrics={props.currentSong ? props.currentSong.lyrics : ""} />
    </div>
  )
}

export default KaraokeDisplay;
