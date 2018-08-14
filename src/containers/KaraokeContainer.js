import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    playingSong: ""
  }

  componentDidMount(){
    fetch('http://192.168.3.119:3000/users/4/songs').then(resp => resp.json()).then(resp => {this.setState({songs: resp})})
  }

  handleClick = (id) =>{
    fetch('http://192.168.3.119:3000/users/4/songs/' + id).then(resp => resp.json()).then(resp => {this.setState({playingSong: resp})})
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList handleClick={this.handleClick} songs={this.state.songs} />
        </div>
        <KaraokeDisplay song={this.state.playingSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
