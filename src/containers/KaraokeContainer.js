import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

const URL = "https://demo.lovescomputers.com/users/5/songs"

class KaraokeContainer extends Component {
  constructor() {
    super(); 

    this.state = {
      allSongs: [],
      currentSongs: [],
      songCurrentlyPlaying: {},
      currentTitleSearched: ""
    };
  }

  playSelectedSong = (event, songId) => {
    const selectedSong = this.state.currentSongs[songId];
    this.incrementPlaysCount(songId);
    this.setState({
      songCurrentlyPlaying: selectedSong
    })
  }

  incrementPlaysCount = (songId) => {
    console.log("This is the ID", songId); 
    debugger; 
    if (this.state.currentSongs[songId].title !== this.state.songCurrentlyPlaying.title) {
      const patchPlaysUrl = URL + '/' + this.state.currentSongs[songId].id + '/play';
      fetch(patchPlaysUrl, {
        method: "PATCH"
      }).then( resp => this.updateCurrentSongs())
    } else {
      console.log("This song is already playing!")
    }
  }

  updateCurrentSongs = () => {
    let prevCurrentSongs = this.state.currentSongs; 
    fetch(URL).then( resp => resp.json()).then( songsJson => this.setState({
      allSongs: songsJson
    })).then( songs => {
      let filteredSongList = this.state.allSongs.filter( (song) => {
        return song.title.toLowerCase().includes(this.state.currentTitleSearched.toLowerCase())
      });
      this.setState({
        currentSongs: filteredSongList
      })
    })


  }

  incrementDislikesCount = () => {
    const patchDislikesUrl = URL + '/' + this.state.songCurrentlyPlaying.id + '/dislike';
    fetch(patchDislikesUrl, {
      method: "PATCH"
    }).then( resp => this.updateCurrentSongs())
    console.log("We're incrementing the dislikes!")
  }

  incrementLikesCount = () => {
    const patchLikesUrl = URL + '/' + this.state.songCurrentlyPlaying.id + '/like';
    fetch(patchLikesUrl, {
      method: "PATCH"
    }).then( resp => this.updateCurrentSongs())
    console.log("We're incrementing the likes!")
  }

  filterSongsBySearch = (event) => {
    let filteredSongList = this.state.allSongs.filter( (song) => {
      return song.title.toLowerCase().includes(event.target.value.toLowerCase())
    })

    this.setState({
      currentSongs: filteredSongList,
      currentTitleSearched: event.target.value
    })
  }

  componentDidMount() {
    fetch(URL).then( resp => resp.json()).then( songsJson => this.setState({
      allSongs: songsJson,
      currentSongs: songsJson
    })); 
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onChange={this.filterSongsBySearch}/>
          <SongList songs={this.state.currentSongs} onPlayClick={this.playSelectedSong}/>
        </div>
        <KaraokeDisplay song={this.state.songCurrentlyPlaying} upVote={this.incrementLikesCount} downVote={this.incrementDislikesCount}/>
      </div>
    );
  }
}

export default KaraokeContainer;
