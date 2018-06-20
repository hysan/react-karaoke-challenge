import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs,
    currentSong: null,
  }

  playSong = (id) => {
    const currentSong = this.state.songs.find(song => song.id === id);
    this.setState({ currentSong });
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={this.state.songs} playSong={this.playSong} />
        </div>
        <KaraokeDisplay {...this.state.currentSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
