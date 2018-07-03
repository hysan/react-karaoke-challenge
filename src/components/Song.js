import React from 'react';

const Song = (props) => {
  const playSong = () => { props.playSong(props.id) };

  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      {
        props.playSong ?
          <React.Fragment>
            <td>{props.likes}</td>
            <td>{props.dislikes}</td>
            <td>{props.plays}</td>
            <td><button onClick={playSong}>Play</button></td>
          </React.Fragment>
        :
          null
      }
    </tr>
  )
}

export default Song;
