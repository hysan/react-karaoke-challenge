import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = props => {
  if (props.currentSong) {
    return (
      <div className="karaoke-display">
        <h2>{props.currentSong.title}</h2>
        <Lyrics lyrics={props.currentSong.lyrics} />
      </div>
    );
  } else {
    return (
      <div className="karaoke-display">
        <h2>No Song Selected</h2>
      </div>
    );
  }
};

export default KaraokeDisplay;
