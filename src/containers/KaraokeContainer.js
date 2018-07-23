import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      songs: songs,
      clickedPlay: false,
      playSong: {}
    };
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
