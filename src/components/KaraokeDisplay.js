import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = (props) => {

  const voteBar = () => {
    return (
      <VoteBar upTitle='Like' voteUp={props.voteUp} downTitle='Dislike' voteDown={props.voteDown} />
    )
  }

  return (
    <div className="karaoke-display">
      {props.song.id > -1 ? voteBar() : null}
      <h2>{props.song.title}</h2>
      <Lyrics lyrics={props.song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
