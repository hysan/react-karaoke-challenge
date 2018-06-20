import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    currentSong: null,
    title: "",
  }

  componentDidMount() {
    fetch('http://localhost:4000/songs')
      .then(res => res.json())
      .then(json => this.setState({ songs: json }))
  }

  playSong = (id) => {
    const currentSong = this.state.songs.find(song => song.id === id);
    this.setState({ currentSong });
  }

  updateTitle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  filteredSongs = () => {
    return this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.title.toLowerCase()));
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter title={this.state.title} handleChange={this.updateTitle} />
          <SongList songs={this.filteredSongs()} playSong={this.playSong} />
        </div>
        <KaraokeDisplay {...this.state.currentSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
