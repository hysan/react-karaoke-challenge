import React from 'react';
import songs from '../data/songs';




const SongList = () => {

  const URL = 'https://demo.lovescomputers.com/users/11/songs'
  let newData = null

  // const fetchSongs = () => {
  //   fetch(URL).then(resp => resp.json()).then(data => newData = data)
  // }

  const fetchSongs = () => {
     fetch(URL).then(resp => resp.json()).then(data => mapSongs(data))
  }

  const playOnClickHandler = (event) => {
    this.props.changeSong = event.target
  }
  
  let mapSongs = (data) => {
    return data.map((song) => {
      return <tr>
        <th>{song.title}</th>
        <th>{song.singer}</th>
        <th onclick={playOnClickHandler}>▶</th>
      </tr>
    })
  }

  return (
    <div>
      <table className="song-list">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Singer</th>
            <th>▶</th>
          </tr>
        {fetchSongs()}
        </tbody>
      </table>
    </div>
  )
  
}

export default SongList;
