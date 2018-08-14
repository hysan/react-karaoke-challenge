import React from 'react';
import uuid from 'uuid'
const Song = (props) => {

  return (
    <tr className="song" key ={uuid()}>
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td><button onCLick = {(event) => props.handlePlay(props.title)}>Play</button></td>
    </tr>
  )
}

export default Song;
