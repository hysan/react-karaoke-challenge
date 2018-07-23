import React from 'react';

const Song = ({title, singer, onPlayClick, idx}) => {
  return (
    <tr className="song" key={idx}>
      <td>{title}</td>
      <td>{singer}</td>
      <td><button onClick={(event) => onPlayClick(event, idx)}>Play</button></td>
    </tr>
  )
}

export default Song;
