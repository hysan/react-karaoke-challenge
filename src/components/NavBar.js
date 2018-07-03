import React from 'react';

const NavBar = ({ showSongs, showQueue }) => {
  return (
    <div className="nav-bar">
      <button
        className="pure-button"
        onClick={showSongs}
      >
        Song List
      </button>
      <button
        className="pure-button"
        onClick={showQueue}
      >
        Queue
      </button>
    </div>
  )
}

export default NavBar;
