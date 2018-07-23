import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {
      searchValue: "",
      songs: [],
      clickedPlay: false,
      playSong: {}
    };

    //load songs from API
    fetch("http://localhost:4000/songs").then(request => request.json()).then(json => this.setState({
      songs: json,
    }));
  }

  handleKeyUp = (event) => {
    //state control for search bar
    this.setState({
      searchValue: event.target.value
    })
  }


  loadSongs = () => {
    let filteredSongs;
    filteredSongs = this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
    return filteredSongs
  }

  handleClickPlay = (event, song) => {
    this.setState({
      clickedPlay: true,
      playSong: song
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onKeyUp={this.handleKeyUp}/>
          <SongList songs={this.loadSongs()} onClick={this.handleClickPlay}/>
        </div>
          {
            (this.clickedPlay) ? <KaraokeDisplay song={null}/> : <KaraokeDisplay song={this.state.playSong}/>
          }
      </div>
    );
  }
}

export default KaraokeContainer;
