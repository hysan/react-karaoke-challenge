import React from 'react';

const Song = ({song, onPlayClick, idx}) => {
  return (
    <tr className="song" key={idx}>
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td>{song.plays}</td>
      <td><button onClick={(event) => onPlayClick(event, idx)}>Play</button></td>
    </tr>
  )
}

export default Song;
