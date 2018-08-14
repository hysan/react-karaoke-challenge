import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';


class KaraokeContainer extends Component {

  ogSongs = []

  state = {
    playlist: [],
    lyricsDisplay: {},
    filter: ""
  }

  fetchData = () => {
    return fetch('http://192.168.3.119:3000/users/1/songs').then(res => res.json()).then(res => this.setState({
      ...this.state,
      playlist: res
    }))
  }
  
  
  componentDidMount() {
    this.fetchData().then( () => {this.ogSongs = this.state.playlist})
  }

  clickPlay = (songObj) => {
    this.setState({
      ...this.state,
      lyricsDisplay: songObj
    })
  }

  handleFilter = (event) => {
    this.setState({
      ...this.state,
      filter: event.target.value
    }, this.filterSongs)
  }

  songArr = () => {
    return [...this.ogSongs].filter(song => {
      return song.title.includes(this.state.filter)
    })
  }


  filterSongs = () => {

    if (this.state.filter === ""){
      this.setState({
        ...this.state,
        playlist: this.ogSongs
      }) 
    } else {
      this.setState({
        ...this.state,
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
