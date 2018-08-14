import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    currentSelectedSong: '',
    filteredSongs: [],
  }


  componentDidMount() {
    fetch('http://192.168.3.119:3000/users/8/songs')
      .then(response => response.json())
      .then(data => this.setState({
        songs: data,
        filteredSongs: data}));
  }


  playClickHandler = (songToPlay) => {
    // console.log(songToPlay)
    this.setState({
      currentSelectedSong: songToPlay
    })
  }

  searchHandler = (searchValue) => {
    // debugger;
    let filteredSongs = this.state.songs
    filteredSongs = filteredSongs.filter((song) => {
      return song.title.includes(searchValue.currentSearchTerm)
    })

    this.setState({
      filteredSongs: filteredSongs
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter searchHandler={this.searchHandler} />
          <SongList songs={this.state.filteredSongs} playClickHandler={this.playClickHandler} />
        </div>
        <KaraokeDisplay currentSelectedSong={this.state.currentSelectedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
