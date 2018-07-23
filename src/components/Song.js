import React from 'react';

const Song = ({title, singer}) => {
  console.log("Inside the Song:", title, singer); 
  return (
    <tr className="song">
      <td>{title}</td>
      <td>{singer}</td>
      <td><button>Play</button></td>
    </tr>
  )
}

export default Song;
