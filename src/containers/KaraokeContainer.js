import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    filteredSongs:[],
    lyrics: '',
  }

  handlePlay = (event,title) => {
    const songMatch = this.state.songs.find(song=> {
      return song.title === title
    })
    this.setState({
      lyrics: songMatch.lyrics
    })
  }

  handleFilter = (event) => {
    let filteredSongs = this.state.songs.filter(song => {
      return song.title.includes(event.target.value)
    })
    this.setState({
      filteredSongs:filteredSongs
    })
  }

  componentDidMount() {
    const songsUrl = "https://demo.lovescomputers.com/users/9/songs"
    fetch(songsUrl).then(res=>res.json()).then(data => {
      this.setState({
        songs: data,
        filteredSongs: data
      })
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songFilter={this.handleFilter}/>
          <SongList songs={this.state.filteredSongs} play={this.handlePlay}/>
        </div>
        <KaraokeDisplay lyrics={this.state.lyrics}/>
      </div>
    );
  }
}

export default KaraokeContainer;
