import React from 'react';

const SongList = (props) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {props.showSongs()}

      </tbody>
    </table>
  )
}

export default SongList;
