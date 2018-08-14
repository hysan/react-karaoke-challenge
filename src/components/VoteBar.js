import React from 'react';

const VoteBar = ({ upTitle, voteUp, downTitle, voteDown, currentSong }) => {
  return (
    <div className="vote-bar">
      <button likes={currentSong.likes}
        className="pure-button up-button"
        onClick={voteUp}
      >
        {upTitle}
      </button>
      <button
        className="pure-button down-button"
        onClick={voteDown}
      >
        {downTitle}
      </button>
    </div>
  )
}

export default VoteBar;
