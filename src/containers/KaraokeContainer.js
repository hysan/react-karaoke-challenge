import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super(); 

    this.state = {
      allSongs: [],
      currentSongs: [],
      songCurrentlyPlaying: {}
    };
  }

  playSelectedSong = (event, idx) => {
    const selectedSong = this.state.currentSongs[idx];
    console.log("Selected song: ", selectedSong); 
    this.setState({
      songCurrentlyPlaying: selectedSong
    })
  }

  filterSongsBySearch = (event) => {
    let filteredList = this.state.allSongs.filter( (song) => {
      return song.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(filteredList);

    console.log(event.target.value);
  }

  componentDidMount() {
    this.setState({
      allSongs: songs,
      currentSongs: songs
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onChange={this.filterSongsBySearch}/>
          <SongList songs={this.state.currentSongs} onPlayClick={this.playSelectedSong}/>
        </div>
        <KaraokeDisplay song={this.state.songCurrentlyPlaying}/>
      </div>
    );
  }
}

export default KaraokeContainer;
