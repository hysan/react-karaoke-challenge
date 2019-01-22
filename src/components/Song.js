import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td>{props.likes}</td>
      <td>{props.dislikes}</td>
      <td>{props.plays}</td>
      <td><button onClick={() => props.playSong(props.id)}>Play</button></td>
    </tr>
  )
}

export default Song;
