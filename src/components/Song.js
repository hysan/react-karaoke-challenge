import React from 'react';



function handleClickedSong(event, selectedSong) {
  let clickedSong = event.target.value.id
}

const Song = ({song}) => {

  return (
    <tr id={song.id} className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td><button >Play</button></td>
    </tr>
  )
}

export default Song;
