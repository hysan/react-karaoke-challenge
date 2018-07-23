import React from 'react';
import uuid from 'uuid';

const Song = (props) => {
  return (
    <tr className="song" key={uuid()}>
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={(event)=>props.play(event,props.song.title)}>Play</button></td>
    </tr>
  )
}

export default Song;
