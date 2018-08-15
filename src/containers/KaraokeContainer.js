import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

const USER_ID = 30;

class KaraokeContainer extends Component {
  state = {
    songs: [],
    // filteredSongs: [],
    searchTerm: '',
    currentSong: {},
  }

  componentDidMount() {
    fetch(`http://192.168.3.119:3000/users/${USER_ID}/songs`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(json => {
        this.setState({ songs: json, filteredSongs: json })
      })
    // I'm tripped up by my fetch
  }

  selectSong = (id) => {
    console.log(id);
    const currentSong = this.state.songs.find(song => song.id === id);
    this.setState({ currentSong });
  }

  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value }/*, () => {
      this.filterSongs();
    }*/);
  }

  filterSongs = () => {
    const filteredSongs = this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({ filteredSongs })
  }

  filteredSongs = () => {
    console.log('hello');
    return this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }

  render() {
    console.log('%c render state', 'color: red', this.state);
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter searchTerm={this.state.searchTerm} handleChange={this.updateSearchTerm} />
          <SongList songs={this.filteredSongs()} selectSong={this.selectSong} />
        </div>
        <KaraokeDisplay title={this.state.currentSong.title} lyrics={this.state.currentSong.lyrics} />
      </div>
    );
  }
}

export default KaraokeContainer;
