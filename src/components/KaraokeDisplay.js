import React from 'react';
import Lyrics from './Lyrics';

function displayCurrentSong(props) {
  if (props.currentSong) {
    return (
      <div className="karaoke-display">
      <button style={{backgroundColor: 'green'}}>Like</button><button style={{backgroundColor: 'red'}}>Dislike</button>
        <h2>{props.currentSong.title}</h2>
        <Lyrics lyrics={props.currentSong.lyrics} />
      </div>
    )
  } else {
    return (
      <div className="karaoke-display">
      <button style={{backgroundColor: 'green'}}>Like</button><button style={{backgroundColor: 'red'}}>Dislike</button>
        <h2>Song Title</h2>
        <Lyrics lyrics="example song lyrics" />
      </div>
    )
  }
}

const KaraokeDisplay = props => {
  // console.log(props)
  return (
    displayCurrentSong(props)
  )
}

export default KaraokeDisplay;
