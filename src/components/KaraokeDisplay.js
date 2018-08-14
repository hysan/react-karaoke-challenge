import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
    // console.log(props.songLyrics)
  return (
      
      
    <div className="karaoke-display">
      <h2>Song Title</h2>
      <Lyrics lyrics={props.songLyrics} />
    </div>
  )
}

export default KaraokeDisplay;
