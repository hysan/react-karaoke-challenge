import React, {Fragment} from 'react';
import UUID from 'uuid'

//components
import Song from "./Song" 

const SongList = (props) => {

  function buildList() {
    return props.songs.map( function(song) {
      return (
        <Fragment key={UUID()}>
          <Song song={song}/>
        </Fragment>
      )
    })
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {buildList()}
        
      </tbody>
    </table>
  )
}

export default SongList;
