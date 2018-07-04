import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    title: "",
    currentSong: {},
  }

  componentDidMount() {
    // Using fake data:
    // this.setState({ songs });

    // Using fetch:
    this.loadSongs();
  }

  loadSongs = () => {
    const USER_ID = 1;

    fetch(`http://localhost:4000/users/${USER_ID}/songs`)
      .then(res => res.json())
      .then(json => {
        this.setState({ songs: json });
      })
  }

  playSong = (id) => {
    const currentSong = this.findSongById(id);

    // This is just a JavaScript shorthand for currentSong: currentSong
    this.setState({
      currentSong,
    });
  }

  findSongById = (id) => {
    return this.state.songs.find(song => song.id === id);
  }

  updateTitle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    // OR
    // this.setState({ title: event.target.value });
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
        <KaraokeDisplay
          song={this.state.currentSong}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
