import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td><button onClick={(event) => props.onClick(event, props.song)}>Play</button></td>
    </tr>
  )
}

export default Song;
