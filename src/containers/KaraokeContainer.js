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

  selectedSong(song) {
    this.setNewState("selectedSong", song)
  }


  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList 
            songs={this.state.songs}
            selectedSong={(passedSong) => this.selectedSong(passedSong)}
          />
        </div>
        <KaraokeDisplay song={this.state.selectedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
