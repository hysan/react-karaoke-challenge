import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';


class KaraokeContainer extends Component {

  state = {
    songs: [],
    songToDisplay: '',
    filteredSongs: [],
    searchTerm: ''
  }

  componentDidMount() {
    this.fetchSongs()
  }

  fetchSongs = () => {
    fetch('http://192.168.3.119:3000//users/6/songs').then(res => res.json()).then(json => this.updateSongsState(json))
  }

  updateSongsState = (json) => {
    this.setState({
      ...this.state,
      songs: json,
      filteredSongs: json
    })
  }

  handleSongToDisplay = (song) => {
    this.setState({
      ...this.state,
      songToDisplay: song
    })
  }

  handleSearch = (newSearchTerm) => {
    console.log(newSearchTerm.length)
    this.setState({
      ...this.state,
      searchTerm: newSearchTerm
    }, () => this.updateFilterState() )
  }

  updateFilterState = () => {
    const filteredSongs = this.state.songs.filter((song) => {
      return (song.title.toLowerCase()).includes(this.state.searchTerm.toLowerCase())
    })

    this.setState({
      ...this.state,
      filteredSongs: filteredSongs
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearch={this.handleSearch}/>
          <SongList songs={this.state.searchTerm.length === 0 ? this.state.songs : this.state.filteredSongs} songToDisplay={this.handleSongToDisplay}/>
        </div>
        <KaraokeDisplay song={this.state.songToDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
