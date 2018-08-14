import React from "react";
import Lyrics from "./Lyrics";

const KaraokeDisplay = props => {
  let song;
  Number.isInteger(props.data.selectedSong)
    ? (song = props.data.songs.find(
        song => song.id === parseInt(props.data.selectedSong)
      ))
    : (song = { lyrics: "" });

  return (
    <div className="karaoke-display">
      <h2>Song Title</h2>
      <Lyrics lyrics={song.lyrics} />
    </div>
  );
};

export default KaraokeDisplay;
