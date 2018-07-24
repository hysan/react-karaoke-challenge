import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props);
    //set initial state of empty array of songs, blank search value, play false and empty (to be filled with lyrics later)
    this.state = {
      songs: [],
      searchValue: "",
      playSong: {},
      clickedPlay: false
    };


  // API not working, have to use local file
    // fetch("https://demo.lovescomputers.com/songs")
    //   .then(request => request.json())
    //   .then(json => this.setState({
    //   songs: json,
    // }));

//cant get this to work either
    fetch('../data/songs')
      .then(request => request.json())
      .then(json => this.setState({
      songs: json,
    }));


  }
//load all songs or only searched ones on left sidebar
  loadSongs = () => {
    let filtered;
    filtered = this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
    return filtered;
  }
  //clicked play next to song title in left sidebar
  handleClickPlay = (event, song) => {
    this.setState({
      clickedPlay: true,
      playSong: song,
    })
  }

//search for song
  handleKeyUp = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }


  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onKeyUp={this.handleKeyUp}/>
          <SongList songs={this.loadSongs()} onClick={this.handleClickPlay}/>
        </div>
        {(this.clickedPlay) ? <KaraokeDisplay song={null}/> : <KaraokeDisplay song={this.state.playSong}/> }
      </div>
    );
  }
}

export default KaraokeContainer;
