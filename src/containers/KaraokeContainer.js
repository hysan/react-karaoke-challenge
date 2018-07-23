import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentSong: ""
    }
  }

  chooseCurrentSong = (event) => {
    event.persist()
    let userSelection = songs.find(function(individualSong){
      return (individualSong.title === (event.target.innerText));
    })
    this.setState({currentSong: userSelection})
  }

  render() {
    console.log("Big container current song:", this.state.currentSong.title)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList chooseCurrentSong={this.chooseCurrentSong}/>
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
