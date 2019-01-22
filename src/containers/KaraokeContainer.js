import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

const API = 'http://localhost:4000/users/1/songs'

class KaraokeContainer extends Component {

  state = {
    songs: [],
    selected: null,
    filter: ''
  }

  componentDidMount() {
    this.getSongs()
  }

  getSongs = () => {
    fetch(API)
    .then(res => res.json())
    .then(songs => {
      this.setState({ songs })
    })
  }

  handlePlay = (id) => {
    if (this.state.selected !== id) {
      this.setState({ selected: id }, () => {
        fetch(API + `/${id}/play`, {
          method: 'PATCH',
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
          }
        })
        .then(() => this.getSongs())
      })
    }
  }

  handleLike = (id) => {
    fetch(API + `/${id}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then(() => this.getSongs())
  }

  handleDislike = (id) => {
    fetch(API + `/${id}/dislike`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then(() => this.getSongs())
  }

  handleFilter = () => {
    const filteredSongs = this.state.songs.filter(song => song.title.includes(this.state.filter))
    return <SongList songs={filteredSongs} handlePlay={this.handlePlay}/>
  }

  handleChange = (event) => {
    const filter = event.target.value
    this.setState({ filter })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange} filter={this.state.filter}/>
          {this.handleFilter()}
        </div>
        {this.state.selected ? <KaraokeDisplay song={this.state.songs.find(song => song.id === this.state.selected)} voteUp={this.handleLike} voteDown={this.handleDislike}/> : <KaraokeDisplay song={{title: 'Select a Song', lyrics: 'example song lyrics'}}/>}
      </div>
    );
  }
}

export default KaraokeContainer;
