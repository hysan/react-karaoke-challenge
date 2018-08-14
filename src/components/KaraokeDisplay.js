import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  const {title, lyrics} = props
  return (
    <div className="karaoke-display">
      <h2>{title}</h2>
      <Lyrics lyrics={lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
