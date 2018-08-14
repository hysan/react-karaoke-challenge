import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = ({currentSong, upTitle, handleLike}) => {
  return (
    <div className="karaoke-display">
      <VoteBar currentSong={currentSong} upTitle={upTitle} downTitle ="Dislike" voteUp={handleLike} voteDown={undefined}/>
      <h2>{currentSong.title}</h2>
      <Lyrics lyrics={currentSong.lyrics} />
    </div>
    
  )
}

export default KaraokeDisplay;
