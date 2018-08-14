import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: {}
  }

  componentDidMount() {
    fetch('http://192.168.3.119:3000/users/18/songs')
      .then(res => res.json())
      .then(data => {
        this.setState({
          songs: [...data]
        })
      })
  }

  onClick = (song) => {
    this.setState({
      currentSong: song
    })
  }

  filterSongs = (search) => {
    this.setState({
      songs: [...this.state.songs].filter((song) => {
        song.title.toLowerCase().includes(search.toLowerCase())
      })
    })
  }

  render() {

    debugger
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filter={this.filterSongs}/>
          <SongList songs={this.state.songs} onClick={this.onClick}/>
        </div>
        <KaraokeDisplay lyrics={this.state.currentSong.lyrics}/>
      </div>
    );
  }
}

export default KaraokeContainer;
