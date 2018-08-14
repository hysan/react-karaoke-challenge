import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
//import songs from '../data/songs';

const songURL = `http://localhost:4000/users/11/songs`

class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: '',
    search: ''
  }

  componentDidMount() {
    fetch(songURL).then(response => response.json()).then(data => this.setState({
      songs: data
    }));
  }


search = (value) => {
  this.setState({
    search: value
  })
}

check = () => {
  if (this.state.search === '') {
    return <SongList songs={this.state.songs} establishCurrentSong={this.establishCurrentSong}/>
  }
  else {
    let searchedMusic = [...this.state.songs].filter(song => { return song.title.toLowerCase().includes(this.state.search.toLowerCase())});
    return <SongList songs={searchedMusic} establishCurrentSong={this.establishCurrentSong}/>
  }
}

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onChange={this.search} filteredMusic={this.state.search}/>
          {this.check()}
        </div>
          <KaraokeDisplay song={this.state.currentSong} establishCurrentSong={this.establishCurrentSong}/>
      </div>
    );
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////

establishCurrentSong = (clickedSong) => {
  this.setState({
    currentSong: clickedSong
  })
}

}

export default KaraokeContainer;
