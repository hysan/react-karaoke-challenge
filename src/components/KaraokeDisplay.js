import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {

  const handleUpClick = () => {
    if (props.song) {
      props.like(props.song)
    }
  }

  const handleDownClick = () => {
    if (props.song) {
      props.dislike(props.song)
    }

  }

  const buttons = ()=> {
    if (props.song) {
      return
        <React.Fragment>

        </React.Fragment>

    }
  }

  return (
    <div className="karaoke-display">

    <button type="button" className="up-button" onClick={handleUpClick}>Like</button>
    <button type="button" className="down-button" onClick={handleDownClick}>Dislike</button>

      <h2>{props.song.title}</h2>
      <Lyrics lyrics={props.song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
