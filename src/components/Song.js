import React from 'react';

const Song = (props) => {

  console.log(props)
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td><button onClick={() => props.clickPlay(props.song)}>Play</button></td>
    </tr>
  )
}

export default Song;
