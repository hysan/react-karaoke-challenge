import React from 'react';

const Song = (props) => {

  const handleClick = () => {
    props.songToDisplay(props.song)
    props.addPlay(props.song)
  }

  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td>{props.song.plays}</td>
      <td>{props.song.likes}</td>
      <td>{props.song.dislikes}</td>
      <td><button onClick={handleClick}>Play</button></td>
    </tr>
  )
}

export default Song;
