import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';


class KaraokeContainer extends Component {
  state = {
    key: ''
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList theData={this.props.theData} />
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
