import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={() => props.playSong(props.song.id)}>Play</button></td>
    </tr>
  )
}

export default Song;
