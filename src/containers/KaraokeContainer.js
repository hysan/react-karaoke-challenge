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
    this.loadSongs();
  }

  loadSongs = () => {
    fetch('http://localhost:4000/songs')
      .then(res => res.json())
      .then(json => this.setState({ songs: json }))
  }

  getSong = (id) => {
    fetch(`http://localhost:4000/songs/${id}`)
      .then(res => res.json())
      .then(json => {
        const songs = this.state.songs.map(song => {
          if (song.id === id) {
            return json;
          }
          return song;
        })

        this.setState({ songs })
      })
  }

  playSong = (id) => {
    const currentSong = this.state.songs.find(song => song.id === id);

    fetch(`http://localhost:4000/songs/${currentSong.id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...currentSong, plays: currentSong.plays + 1 })
      }
    )
      .then(res => res.json())
      .then(json => {
        // This should act like a real API where we only
        // start playing after getting a music stream back
        // from the API. Hence doing the setState for
        // currentSong here instead of before the patch.
        this.setState({
          currentSong: json,
        });

        // If this were a real API, we'd either refetch
        // all of the songs since other people could be
        // updating the list, or we'd refetch a single
        // and update our list.
        this.loadSongs();
        // this.getSong(json.id);
      })
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
