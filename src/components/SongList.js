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

        {/* Your Code Goes Here */}
        {props.renderSongs()}
      </tbody>
    </table>
  )
}

export default SongList;
