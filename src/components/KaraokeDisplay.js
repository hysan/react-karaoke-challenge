import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar'

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      {props.song.id ? <VoteBar songId={props.song.id} voteUp={props.voteUp} voteDown={props.voteDown}/> : null}
      <h2>{props.song.title}</h2>
      <Lyrics lyrics={props.song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
