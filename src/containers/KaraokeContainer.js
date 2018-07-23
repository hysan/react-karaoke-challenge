import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: "",
      currentSong: "",
      songList: songs,
      currentSongList: ["placeholder"]
    }
  }

  filterSong = (query) => {
    let filteredSongList = this.state.songList.slice().filter(individualSong => individualSong.includes(query))
    this.setState({currentSongList: filteredSongList})
  }

  onNewQuery = (event) => {
    this.setState({query: event.target.value})
    this.filterSong(this.state.query)
  }



  chooseCurrentSong = (event) => {
    event.persist()
    let userSelection = songs.find(function(individualSong){
      return (individualSong.title === (event.target.innerText));
    })
    this.setState({currentSong: userSelection})
  }

  render() {
    console.log("current song list", this.state.currentSongList)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter query={this.state.query} onNewQuery={this.onNewQuery}/>
          <SongList currentSongList={this.state.currentSongList} chooseCurrentSong={this.chooseCurrentSong}/>
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
