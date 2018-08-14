import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    filteredSongs: [],
    lyrics: ''
  }

  handlePlay = (title) => {
    debugger
    const matchSong = this.state.songs.find(song => {
      song.title === title
    })
    this.setState({
      lyrics: matchSong.lyrics
    })
  }

  handleFilter = (event) => {
    
    let filtered = this.state.songs.filter(song => {
      return song.title.includes(event.target.value)
    })
    this.setState({
      filteredSongs: filtered
    })
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/15/songs').then(res=> res.json()).then(res => this.setState({
      songs: res,
      filteredSongs: res
    }))
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songFilter = {this.handleFilter}/>
          <SongList songs = {this.state.filteredSongs} handlePlay = {this.handlePlay} />
        </div>
        <KaraokeDisplay lyrics = {this.state.lyrics} />
      </div>
    );
  }
}

export default KaraokeContainer;
