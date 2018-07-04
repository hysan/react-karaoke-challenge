import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td><button onClick={props.playSong}>Play</button></td>
    </tr>
  )
}

export default Song;
