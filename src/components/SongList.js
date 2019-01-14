import React from 'react';
import Song from './Song';

const SongList = (props) => {

  console.log(props)

  const mapSongs = () => {
    return props.playList.map(
      (songObj) => {return <Song key={songObj.id} song={songObj} title={songObj.title} singer={songObj.singer} clickPlay={props.clickPlay}/>}
    )
  }


  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {mapSongs()}
        
      </tbody>
    </table>
  )
}

export default SongList;
