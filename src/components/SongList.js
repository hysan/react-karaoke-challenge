import React from 'react';
import songs from '../data/songs';
import Song from './Song'

const SongList = () => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {/* Your Code Goes Here */}
      </tbody>
    </table>
  )
}

export default SongList;
