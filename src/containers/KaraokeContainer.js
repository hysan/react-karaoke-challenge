import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songList: [],
    currentSong: [],
    allSongs: [],
    filteredSongs: ''
  }

  loadLyrics = (e) => {
    fetch(`http://localhost:4000/songs/${e.target.value}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        currentSong: data
      })
    })
  }

//need to change state without losing original data
  filterSongs = (e) => {
    this.setState({
      filteredSongs: e.target.value
    })
    let filterList = this.state.allSongs.filter(song => song.title.toLowerCase().includes(this.state.filteredSongs.toLowerCase()) || song.singer.toLowerCase().includes(this.state.filteredSongs.toLowerCase()))
    this.setState(function (prevState) {
      songList: prevState.songList = filterList
    })
  }

  componentDidMount() {
    fetch('http://localhost:4000/songs/')
    .then(r => r.json())
    .then(data => {
      this.setState({
        songList: data,
        allSongs: data
      })
    })
  }

  // bonus unfinsihed 
  fetchSongs() {
    this.state.allSongs.map((song, index) => {
      fetch(`http://localhost:4000/users/1/songs/${index}`)
      .then(r => r.json())
      .then(data => {
        console.log(data.plays)
      })
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filteredSongs={this.state.filteredSongs} filterSongs={this.filterSongs}/>
          <SongList loadLyrics={this.loadLyrics} songList={this.state.songList} allSongs={this.state.allSongs}/>
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
