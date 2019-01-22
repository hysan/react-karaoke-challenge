import React from 'react';
import Lyrics from './Lyrics';

// debo agregar aqui props para que pueda pasarlo desde el KaraokeContainer
const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>{props.selectedSong.title}</h2>
      <Lyrics lyrics={props.selectedSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;

     
