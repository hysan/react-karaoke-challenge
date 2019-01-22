import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  console.log("Props in Display", props.clickedSong)
  return (
    <div className="karaoke-display">
      <h2>Song Title</h2>
      <Lyrics lyrics={props.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
