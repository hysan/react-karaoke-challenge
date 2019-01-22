import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  // console.log(props)
  return (
    <div className="karaoke-display">
      <h2>{props.title}</h2>
      <Lyrics lyrics="example song lyrics" />
    </div>
  )
}

export default KaraokeDisplay;
