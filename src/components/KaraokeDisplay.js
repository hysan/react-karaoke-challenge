import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = ({song, upVote, downVote}) => {
  return (
    <div className="karaoke-display">
      {song.title ? <VoteBar upTitle="Like" voteUp ={upVote} voteDown={downVote} downTitle="Dislike"/> : false}
      <h2>{song.title}</h2>
      <Lyrics lyrics={song.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
