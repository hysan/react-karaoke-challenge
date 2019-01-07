import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';


class KaraokeContainer extends Component {

  state = {
    songs: [],
    songToDisplay: '',
    filteredSongs: [],
    searchTerm: '',
  }

  componentDidMount() {
    this.fetchSongs()
  }

  fetchSongs = () => {
    fetch('http://localhost:4000/users/6/songs').then(res => res.json()).then(json => this.updateSongsState(json))
  }

  updateSongsState = (json) => {
    this.setState({
      ...this.state,
      songs: json,
      filteredSongs: json
    })
  }

  handleSongToDisplay = (song) => {
    this.setState({
      ...this.state,
      songToDisplay: song
    })
  }

  handleSearch = (newSearchTerm) => {
    console.log(newSearchTerm.length)
    this.setState({
      ...this.state,
      searchTerm: newSearchTerm
    }, () => this.updateFilterState() )
  }

  updateFilterState = () => {
    const filteredSongs = this.state.songs.filter((song) => {
      return (song.title.toLowerCase()).includes(this.state.searchTerm.toLowerCase())
    })

    this.setState({
      ...this.state,
      filteredSongs: filteredSongs
    })
  }

  handleLike = (updatedSong) => {
    const url = `http://localhost:4000/users/6/songs/${updatedSong.id}/like`

    fetch(url, {
      method: 'PATCH',
    }).then(res => res.json()).then(json => this.updateLikeState(json))
  }

  updateLikeState = (updatedSong) => {
    const updatedSongsArray = this.state.songs.map((song) => {
      const returnSong = {...song}

      if (updatedSong.id === song.id) {
        returnSong.likes = updatedSong.likes
      }
      return returnSong
    })

    this.setState({
      ...this.state,
      songs: updatedSongsArray
    }, () => this.updateFilterState())
  }

  handleDislike = (updatedSong) => {

    const url = `http://localhost:4000/users/6/songs/${updatedSong.id}/dislike`

    fetch(url, {
      method: 'PATCH',
    }).then(res => res.json()).then(json => this.updateDislikeState(json))
  }

  updateDislikeState = (updatedSong) => {
    const updatedSongsArray = this.state.songs.map((song) => {
      const returnSong = {...song}

      if (updatedSong.id === song.id) {
        returnSong.dislikes = updatedSong.dislikes
      }
      return returnSong
    })

    this.setState({
      ...this.state,
      songs: updatedSongsArray
    }, () => this.updateFilterState())
  }

  handlePlay = (updatedSong) => {
    const url = `http://localhost:4000/users/6/songs/${updatedSong.id}/play`

    if (updatedSong.id !== this.state.songToDisplay.id) {
      fetch(url, {
        method: 'PATCH',
      }).then(res => res.json()).then(json => this.updatePlaysState(json))
    }
  }

  updatePlaysState = (updatedSong) => {
    const updatedSongsArray = this.state.songs.map((song) => {
      const returnSong = {...song}

      if (updatedSong.id === song.id) {
        returnSong.plays = updatedSong.plays
      }

      return returnSong
    })

    this.setState({
      ...this.state,
      songs: updatedSongsArray
    }, () => this.updateFilterState())
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearch={this.handleSearch}/>
          <SongList addPlay={this.handlePlay} songs={this.state.searchTerm.length === 0 ? this.state.songs : this.state.filteredSongs} songToDisplay={this.handleSongToDisplay}/>
        </div>
        <KaraokeDisplay like={this.handleLike} dislike={this.handleDislike} song={this.state.songToDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
