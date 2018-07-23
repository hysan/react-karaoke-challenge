import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: songs,
    selectedSong: songs[0],
  }

  setNewState = (key, value) => {
    this.setState(
      {
        [key]: value
      }
    )
  }



  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList 
            songs={this.state.songs}
          />
        </div>
        <KaraokeDisplay song={this.state.selectedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
