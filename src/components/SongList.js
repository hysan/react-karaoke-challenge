import React from 'react';

const SongList = (props) => {

  const {songs} = props

  let handleClick = (event, song) => {
    props.onClick(song)
  }

  let renderSongs = songs.map((song) => {
    const {title, singer} = song

    return (
      <tr>
        <td>{title}</td>
        <td>{singer}</td>
        <td onClick={(event) => handleClick(event, song)}>▶</td>
      </tr>
    )
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {/* Your Code Goes Here */}
        {renderSongs}

      </tbody>
    </table>
  )
}

export default SongList;
