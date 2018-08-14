import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    currentSong : {},
    search: "",
    plays: 0,
    likes: 0
  }
  getSongs = () => {
    fetch("http://192.168.3.119:3000/users/7/songs")
    .then(r=> r.json())
    .then(data => this.setState({songs: data}))
  }

  componentDidMount(){
    this.getSongs()
  }

  patchPlay = (clicks, songId) => {
    const postConfig = {
      method: 'PATCH',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(parseInt(clicks))
    }
    fetch(`http://192.168.3.119:3000/users/7/songs/${songId}/play`, postConfig)
    .then(r=> r.json())
    .then(data=> console.log(data.plays))
  }

  handlePlayClick = (event) => {
    let currentSongObj = this.findSong(event.target.id)
    let currentPlayNum = this.patchPlay(currentSongObj.plays + 1, currentSongObj.id)
    this.setState({
      currentSong: currentSongObj,
      plays: currentPlayNum
    }) 
  }

  findSong = (clickedId) => {
    return this.state.songs.find(song => song.id === parseInt(clickedId))
  }

  filterSongs = () => {
    return this.state.songs.filter(song=> song.title.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  likeSong = (songObj, songId) => {
    const postConfig = {
      method: 'PATCH',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(songObj)
    }
    fetch(`http://192.168.3.119:3000/users/7/songs/${songId}/like`, postConfig)
    .then(r=> r.json())
    .then(data=> console.log(data.likes))
  }

  handleLikeClick = (event) => {
    console.log(event.target.likes)
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter searchValue={this.state.search} filterChange={this.handleInputChange}/>
          <SongList songs={this.filterSongs()} play={this.handlePlayClick}/>
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong} upTitle="Like" handleLike={this.handleLikeClick}/>
      </div>
    );
  }
}

export default KaraokeContainer;
