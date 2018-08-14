import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  
  state = {
    songObjs: [],
    filter: '',
    displayedLyrics: '',
  }

  searchFilter = (value) => {
    this.setState( {
      filter: value
    })
  }

  filterForSearch = () => {
    return this.state.songObjs.filter(song => {
        return song.title.toLowerCase().includes(this.state.filter)
      })
    }


  selectSong = (songId) => {
    this.setState({
      displayedLyrics: songId
    })
  }



  render() {
    console.log(this.state)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter searchFilter={this.searchFilter} filter={this.state.filter}/>
          <SongList songObjs={this.filterForSearch()} selectSong={this.selectSong} />
        </div>
        <KaraokeDisplay displayedLyrics={this.state.displayedLyrics} />
      </div>
    );
  }

  

  componentDidMount() {
    fetch("http://192.168.3.119:3000/users/16/songs")
    .then(response => response.json())
    .then(data => {
      this.setState({
        songObjs: data
      })
    })
  }
}

export default KaraokeContainer;
