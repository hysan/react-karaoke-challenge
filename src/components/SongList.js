import React from 'react';
import Lyrics from './Lyrics'
import Song from './Song'

const SongList = (props) => {
    // console.log(props.songs);
    const hanldeClick = (e) => {
         const id = parseInt(e.target.id)
        const newSong = props.songs.filter(song => song.id === id)
        const lyrics = newSong[0].lyrics
        
        props.play(lyrics)
    }
    
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {props.songs.map(song =>  <tr id={song.id}> <td>{song.title}</td> <td>{song.singer}</td><td> <button onClick={(e) => hanldeClick(e)} id={song.id}>Play</button>  </td> </tr>
       
    )}
      </tbody>
    </table>
    
  )
}

export default SongList;
