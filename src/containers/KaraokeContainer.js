import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {

  constructor(props){
    super(props)
    this.apiURL = 'http://localhost:4000/users/2/songs/'
    this.state = {
      songs: [],
      filter: '',
      song: {
        id: -1,
        title: '',
        singer: '',
        lyrics: '',
        plays: -1,
        likes: -1,
        dislikes: -1
      }
    }
  }


  changeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  filterSongs = () => {
    return this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }

  playSong = (id) => {
    if (this.state.song.id !== id){
      this.setState({
        song: this.state.songs.find(song => song.id === id)
      }, this.increasePlayCount)
    }
  }

  voteUp = () => {
    this.like()
  }

  voteDown = () => {
    this.dislike()
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter changeFilter={this.changeFilter} filter={this.state.filter} />
          <SongList songs={this.filterSongs()} playSong={this.playSong} />
        </div>
        <KaraokeDisplay song={this.state.song} voteUp={this.voteUp} voteDown={this.voteDown} />
      </div>
    );
  }

  componentDidMount(){
    this.fetchSongs()
  }

  fetchSongs = () => {
    fetch(this.apiURL)
    .then(res=>res.json())
    .then(data=>this.setState({
      songs: data
    }))
  }

  increasePlayCount = () => {
    const config = {
      method: 'PATCH'
    }
    fetch(this.apiURL + `${this.state.song.id}/play`, config).
    then(res=>{this.fetchSongs()})
  }

  like = () => {
    const config = {
      method: 'PATCH'
    }
    fetch(this.apiURL + `${this.state.song.id}/like`, config).
    then(res=>{this.fetchSongs()})
  }

  dislike = () => {
    const config = {
      method: 'PATCH'
    }
    fetch(this.apiURL + `${this.state.song.id}/dislike`, config).
    then(res=>{this.fetchSongs()})
  }

}

export default KaraokeContainer;
