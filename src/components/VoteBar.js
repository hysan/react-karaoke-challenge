import React from 'react';

// { upTitle, voteUp, downTitle, voteDown }

const VoteBar = (props) => {
  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={() => props.voteUp(props.songId)}
      >
        Like
      </button>
      <button
        className="pure-button down-button"
        onClick={() => props.voteDown(props.songId)}
      >
        Dislike
      </button>
    </div>
  )
}

export default VoteBar;
