import React from 'react';

const Song = (props, playHandle) => {
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td>{props.likes}</td>
      <td>{props.dislikes}</td>
      <td>{props.plays}</td>
      <td>
        <button data-id={props.id} onClick={event => playHandle(event)}>
          Play
        </button>
      </td>
    </tr>
  );
};

export default Song;
