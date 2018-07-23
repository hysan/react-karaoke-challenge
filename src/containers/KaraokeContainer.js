import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

const URL = "https://demo.lovescomputers.com/users/5/songs"

class KaraokeContainer extends Component {
  constructor() {
    super(); 

    this.state = {
      allSongs: [],
      currentSongs: [],
      songCurrentlyPlaying: {}
    };
  }

  playSelectedSong = (event, songId) => {
    const selectedSong = this.state.currentSongs[songId];
    console.log("Song ID:", songId);
    this.incrementPlaysCount(songId);

    this.setState({
      songCurrentlyPlaying: selectedSong
    })
  }

  incrementPlaysCount = (songId) => {
    if (this.state.currentSongs[songId] !== this.state.songCurrentlyPlaying) {
      const patchPlaysUrl = URL + '/' + this.state.currentSongs[songId].id + '/play';
      fetch(patchPlaysUrl, {
        method: "PATCH"
      }) 
    } else {
      console.log("This song is already playing!")
    }
  }

  filterSongsBySearch = (event) => {
    let filteredSongList = this.state.allSongs.filter( (song) => {
      return song.title.toLowerCase().includes(event.target.value.toLowerCase())
    })

    this.setState({
      currentSongs: filteredSongList
    })
  }

  componentDidMount() {
    fetch(URL).then( resp => resp.json()).then( songsJson => this.setState({
      allSongs: songsJson,
      currentSongs: songsJson
    })); 
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
