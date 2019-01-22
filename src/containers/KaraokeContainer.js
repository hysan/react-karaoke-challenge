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
    fetch(API)
    .then(res => res.json())
    .then(songs => {
      this.setState({ songs })
    })
  }

  handlePlay = (id) => {
    this.setState({ selected: id })
  }

  handleFilter = () => {
    const filteredSongs = this.state.songs.filter(song => song.title.includes(this.state.filter))
    return <SongList songs={filteredSongs} handlePlay={this.handlePlay}/>
  }

  handleChange = (event) => {
    const filter = event.target.value
    this.setState({ filter }, () => this.handleFilter())
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange} filter={this.state.filter}/>
          {this.handleFilter()}
        </div>
        {this.state.selected ? <KaraokeDisplay song={this.state.songs.find(song => song.id === this.state.selected)}/> : <KaraokeDisplay song={{title: 'Select a Song', lyrics: 'example song lyrics'}}/>}
      </div>
    );
  }
}

export default KaraokeContainer;
