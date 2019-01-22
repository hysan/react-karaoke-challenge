import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

import Song from '../components/Song'

class KaraokeContainer extends Component {

  state = {
    songList: [],
    onDisplay: '',
    filteredSongs: ''
  }

  handlePlay = (event) => {
    let song = this.state.songList.find(song => song.id === parseInt(event.target.className))
    this.setState({
      onDisplay: song
    })
  }

  handleFilter = (event) => {
    let copy = this.state.songList.filter(song => {
      let songTitle = song.title.toLowerCase()
      return songTitle.includes(event.target.value.toLowerCase())
    })
    this.setState({
      filteredSongs: copy
    })
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/1/songs')
    .then(res => res.json())
    .then(data => {
      this.setState({
        songList: data
      })
    })
  }

  showSongs = () => {
    if (this.state.filteredSongs) {
      return this.state.filteredSongs.map(song => {
        return <Song song={song} handlePlay={this.handlePlay} />
      })
    } else {
    return this.state.songList.map(song => {
      return <Song song={song}
                   handlePlay={this.handlePlay}
         />
     })
    }
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter}/>
          <SongList showSongs={this.showSongs}/>
        </div>
        <KaraokeDisplay onDisplay={this.state.onDisplay} />
      </div>
    );
  }
}

export default KaraokeContainer;
