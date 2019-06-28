import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: songs,
    selectedSong: songs[0],
    inputValue: ""
  }

  setNewState = (key, value) => {
    this.setState(
      {
        [key]: value
      }
    )
  }

  selectedSong(song) {
    this.setNewState("selectedSong", song)
  }

  filterSongs = () => {
    let newArray = [...this.state.songs]
    let filteredArray = newArray.filter((song) => song.title === this.state.inputValue)
    if (filteredArray.length > 0) {
       this.setNewState("songs", filteredArray)
    }
      this.setNewState("songs", songs)
  }
  
  

  render() {
    console.log(this.state.songs)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter 
            inputValue={this.state.inputValue}
            handleInputValue={(newValue)=>this.setNewState("inputValue", newValue)}
          />
          <SongList 
            songs={this.state.songs}
            selectedSong={(passedSong) => this.selectedSong(passedSong)}
          />
        </div>
        <KaraokeDisplay song={this.state.selectedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
