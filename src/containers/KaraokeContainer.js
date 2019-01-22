import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

const userId = 1
class KaraokeContainer extends Component {

   

  state = {
    songs: [],
    clickedSong: null,
    dislaySong: false
    
  }

  

  componentDidMount() {
    fetch(`http://localhost:4000/users/${userId}/songs`)
    .then(res => res.json())
    .then (songs => this.setState({songs: songs}))
  }

  playSong = (songId) => {
    // console.log("firing")
    // console.log(songId)
    const songPlayed = this.state.songs.find(song => song.id === songId)
    // console.log(songPlayed)
    this.setState({
      clickedSong: songPlayed
    })
  }

  handleDisplay = () => {
    this.setState ({
      displaySong: !this.state.displaySong
    })
  }
  

  render() {
    // console.log("State in KaraokeContainer", this.state)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList playSong={this.playSong} songs={this.state.songs} />
        </div>
        <KaraokeDisplay  handleDisplay={this.handleDisplay} clickedSong={this.state.clickedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
