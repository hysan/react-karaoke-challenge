import React from 'react';

const SongList = (props) => {

  const renderSongs = () => {
    let renderedSongs = []
    props.songs.forEach(song => {
      renderedSongs.push(<tr><td>{song.title}</td><td>{song.singer}</td><td><button onClick={(event) => props.onClick(event, song)}>Play</button></td></tr>)
    })
    return renderedSongs
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {renderSongs()}
      </tbody>
    </table>
  )
}

export default SongList;
