import React from 'react';

const Song = (props) => {

  const handleClick = () => {
    props.songToDisplay(props.song)
  }

  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={handleClick}>Play</button></td>
    </tr>
  )
}

export default Song;
