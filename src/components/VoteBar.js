import React from 'react';

const VoteBar = (props) => {
  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={()=>{props.handleLike(props.song.id)}}
      >
        Like
      </button>
      <button
        className="pure-button down-button"
        onClick={()=> {props.handleDislike(props.song.id)}}
      >
        Dislike
      </button>
    </div>
  )
}

export default VoteBar;
