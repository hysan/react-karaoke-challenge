import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';


class KaraokeContainer extends Component {

  state= {
    songs: [],
    filteredSongs: ''
  }
  componentDidMount () {
    fetch('http://localhost:4000/users/1/songs')
    .then(response => response.json())
    .then(songs => this.setState({
      songs
    }))
  }
  filterSong= (song) => {
    let typeSong= this.state.songs.filter(song => song === song.title.toLowerCase)
    this.setState({
      songs: typeSong
    })
  }
  playSong= (songId) => {
    let chooseSong= this.state.songs.filter(song => songId === song.id)
    console.log(chooseSong.map(song => song.title));
    this.setState({
      songs: chooseSong
    })
  }
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songs={this.state.songs} filterSong= {this.filterSong}/>
          <SongList songs={this.state.songs} filteredSongs={this.state.filteredSongs} playSong={this.playSong}/>
        </div>
        <KaraokeDisplay playSong= {this.playSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
