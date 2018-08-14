import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    songToDisplay: '',
    filteredSongs: [],
    searchTerm: ''
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

  handleSearch = (searchTerm) => {
    this.setState({
      ...this.state,
      searchTerm: searchTerm
    }, () => {

      const filteredSongs = this.state.songs.filter((song) => {
        return (song.title.toLowerCase()).includes(searchTerm.toLowerCase())
      })

      this.setState({
        ...this.state,
        filteredSongs: filteredSongs
      }, () => {console.log(this.state.searchTerm)})
    })


  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearch={this.handleSearch}/>
          <SongList songs={this.state.searchTerm === "" ? this.state.songs : this.state.filteredSongs} songToDisplay={this.handleSongToDisplay}/>
        </div>
        <KaraokeDisplay song={this.state.songToDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
