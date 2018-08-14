import React from 'react';

const Song = ({songId, playChange}) => {
  return (
    <td><button id={songId} onClick={playChange}>Play</button></td>
  )
}

export default Song;
