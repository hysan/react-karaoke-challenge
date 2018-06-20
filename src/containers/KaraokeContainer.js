import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs,
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={this.state.songs} />
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
