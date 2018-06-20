import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs,
    currentSong: null,
    title: "",
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
    return this.state.songs.filter(song => song.title.includes(this.state.title));
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
