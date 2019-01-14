import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';


class KaraokeContainer extends Component {

  
  state = {
    ogSongs: [],
    playlist: [],
    lyricsDisplay: {},
    filter: ""
  }

  fetchData = () => {
    return fetch('http://192.168.3.119:3000/users/1/songs').then(res => res.json())
    .then(res => this.setState({
      
      playlist: res
    }))
  }
  
  
  componentDidMount() {
    this.fetchData().then( () => {this.setState({
      ogSongs: this.state.playlist
    })})
  }

  clickPlay = (songObj) => {
    this.setState({
      
      lyricsDisplay: songObj
    })
  }

  handleFilter = (event) => {
    this.setState({
      
      filter: event.target.value
    }, this.filterSongs)
  }

  songArr = () => {
    return [...this.state.ogSongs].filter(song => {
      return song.title.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }


  filterSongs = () => {

    /// these next five lines might be redundant 
    /// but i'm too low on time to check
    if (this.state.filter === ""){
      this.setState({
        
        playlist: this.state.ogSongs
      }) 
    } else {
      this.setState({
        
        playlist: this.songArr()
      }) 
    }
  }
  
  
  
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter}/>
          <SongList playList={this.state.playlist} clickPlay={this.clickPlay}/>
        </div>
        <KaraokeDisplay songToDisplay={this.state.lyricsDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
