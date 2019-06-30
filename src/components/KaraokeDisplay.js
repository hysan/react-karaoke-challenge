//done
import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    //displays song title and lyrics on right side of page
    <div className="karaoke-display">
      <h2>{props.song.title}</h2>
      <Lyrics lyrics={props.song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
