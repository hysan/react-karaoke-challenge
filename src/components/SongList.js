import React from 'react';
import Song from './Song'

const SongList = (props) => { 

  function findSong(props) {
    let myArray= props.map((oneSong)=> {return <Song title={oneSong.title} song={oneSong.song} />
    })
    return myArray
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {/* Your Code Goes Here */}
        {findSong}
      </tbody>
    </table>
  )
}

export default SongList;
