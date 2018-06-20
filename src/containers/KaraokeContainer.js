import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';

class KaraokeContainer extends Component {
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList />
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
