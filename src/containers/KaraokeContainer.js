import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props);

    //dont forget initial state then fetch to set state
    // fetch('http://localhost:4000')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
  // }
    console.log(songs);
    this.state = {
      songs: songs,
      selectedSong: songs[0]
    };
  }

  updateClickedSongName = (event) => {
   console.log('hello')
  };

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList
            displaySong={this.state.selectedSong}
            songs={this.state.songs}
            selectedSong={this.updateClickedSongName}
          />
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
