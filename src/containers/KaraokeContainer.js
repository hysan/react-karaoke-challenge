import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    songToDisplay: ''
  }

  componentDidMount() {
    fetch('http://192.168.3.119:3000//users/6/songs').then(res => res.json()).then(json => this.updateSongsState(json))
  }

  fetchSongs = () => {
    fetch('http://192.168.3.119:3000//users/6/songs').then(res => res.json()).then(json =>this. updateSongsState(json))
  }

  updateSongsState = (json) => {
    this.setState({
      songs: json
    })
  }

  handleSongToDisplay = (song) => {
    this.setState({
      ...this.state,
      songToDisplay: song
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={this.state.songs} songToDisplay={this.handleSongToDisplay}/>
        </div>
        <KaraokeDisplay song={this.state.songToDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
