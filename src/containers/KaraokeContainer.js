import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    playingSong: "",
    filteredSongs: []
  }

  componentDidMount(){
    fetch('http://192.168.3.119:3000/users/4/songs').then(resp => resp.json()).then(resp => {this.setState({songs: resp, filteredSongs: resp})})
  }

  handleClick = (id) =>{
    fetch('http://192.168.3.119:3000/users/4/songs/' + id).then(resp => resp.json()).then(resp => {this.setState({playingSong: resp})})
  }

  handleFilter = (event) => {
    const newSongs = [...this.state.songs]
    const filtSongs = newSongs.filter(songObj => songObj.title.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({filteredSongs: filtSongs})
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter} />
          <SongList handleClick={this.handleClick} songs={this.state.filteredSongs} />
        </div>
        <KaraokeDisplay song={this.state.playingSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
