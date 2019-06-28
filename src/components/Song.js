import React from 'react';

const Song = (props) => {
  // console.log(props.song)
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={(event)=> props.songPlay(event,props.song)}>Play</button></td>
    </tr>
  )
}

export default Song;
