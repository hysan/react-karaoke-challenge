import React from 'react';

const Song = (props, playHandle) => {
  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td>
        <button data-name={props.title} onClick={event => playHandle(event)}>
          Play
        </button>
      </td>
    </tr>
  );
};

export default Song;
