import React from 'react';

const Song = (props) => {
  // console.log(props.handlePlayButton)
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={props.handlePlayButton} name={props.song.id}>Play</button></td>
    </tr>
  )
}

export default Song;
