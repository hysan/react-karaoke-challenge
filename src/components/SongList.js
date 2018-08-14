import React from "react";
import Song from "./Song";

const SongList = props => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {props.songList.map((song, idx) => (
          <Song key={idx} song={song} selector={props.songIdSelector} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
