import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';
import Adapter from '../api/Adapter';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    currentSong: null,
    title: "",
  }

  componentDidMount() {
    this.loadSongs();
  }

  loadSongs = () => {
    Adapter.getSongs()
      .then(res => res.json())
      .then(json => this.setState({ songs: json }))
  }

  getSong = (id) => {
    Adapter.getSong()
      .then(res => res.json())
      .then(json => {
        this.updateSong(json);
      })
  }

  playSong = (id) => {
    if (!this.state.currentSong || this.state.currentSong.id !== id) {
      const currentSong = this.findSongById(id);
      
      Adapter.patchPlaySong(currentSong.id)
        .then(res => res.json())
        .then(json => {
          this.setState({
            currentSong: json,
          });

          // If this were a real API, we might want to refetch
          // everything in case others have updated things.
          // this.loadSongs();

          // However, we are not a real API. We are the only
          // ones ever updating, so we can just update the list
          // with the returned data.
          this.updateSong(json);
        })
    }
  }

  likeSong = (id) => {
    const currentSong = this.findSongById(id);

    Adapter.patchLikeSong(currentSong.id)
      .then(res => res.json())
      .then(json => {
        // Same reasoning as playSong() above for why
        // we can update with just the returned data.
        this.updateSong(json);
      })
  }

  dislikeSong = (id) => {
    const currentSong = this.findSongById(id);

    Adapter.patchDislikeSong(currentSong.id)
      .then(res => res.json())
      .then(json => {
        // Same reasoning as playSong() above for why
        // we can update with just the returned data.
        this.updateSong(json);
      })
  }

  findSongById = (id) => {
    return this.state.songs.find(song => song.id === id);
  }

  updateSong = (newSong) => {
    const songs = this.state.songs.map(song => {
      if (song.id === newSong.id) {
        return newSong;
      }
      return song;
    })

    this.setState({ songs })
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
        <KaraokeDisplay
          {...this.state.currentSong}
          likeSong={this.likeSong}
          dislikeSong={this.dislikeSong}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
