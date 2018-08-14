import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import VoteBar from '../components/VoteBar.js'

class KaraokeContainer extends Component {

  state = {
    songs: [],
    playingSong: "",
    filteredSongs: []
  }

  componentDidMount(){
    this.getSongs()
  }

  getSongs = () => {
    fetch('http://192.168.3.119:3000/users/4/songs').then(resp => resp.json()).then(resp => {this.setState({songs: resp, filteredSongs: resp})})
  }

  handleClick = (id) =>{
    if (this.state.playingSong.id !== id){
      fetch('http://192.168.3.119:3000/users/4/songs/' + id).then(resp => resp.json()).then(resp => {this.setState({playingSong: resp})})

      fetch('http://192.168.3.119:3000/users/4/songs/' + id + '/play', {
  method: 'PATCH', headers: {"Content-Type": "application/json"}}).then(resp => resp.json()).then(resp => {this.getSongs()})}

  }

  handleLike = (id) => {
    fetch('http://192.168.3.119:3000/users/4/songs/' + id + '/like', {
method: 'PATCH', headers: {"Content-Type": "application/json"}}).then(resp => {this.getSongs()})
  }

  handleDislike = (id) => {
    fetch('http://192.168.3.119:3000/users/4/songs/' + id + '/dislike', {
method: 'PATCH', headers: {"Content-Type": "application/json"}}).then(resp => {this.getSongs()})
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
        <div classname="sidebar">
          <VoteBar song={this.state.playingSong} handleDislike={this.handleDislike} handleLike={this.handleLike} />
          <KaraokeDisplay song={this.state.playingSong} />
        </div>

      </div>
    );
  }
}

export default KaraokeContainer;
