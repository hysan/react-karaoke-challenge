import React from 'react';

const Song = ({ id, title, singer, handleClick }) => {
  // console.log('Song', props);

  // const { title, singer } = props;
  // const { title, singer } = props.song

  return (
    <tr className="song">
      <td>{title}</td>
      <td>{singer}</td>
      <td><button onClick={() => handleClick(id)}>Play</button></td>
    </tr>
  )
}


// event.target.id

export default Song;
