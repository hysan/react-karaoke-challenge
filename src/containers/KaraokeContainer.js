import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';

const apiUrl = "http://localhost:4000/users/10/songs"

class KaraokeContainer extends Component {

  state = {
    songs: [],
    editSongs: [],
    displayedSong: {
      title: '',
      singer: '',
      lyrics: ''
    }
  }

  componentDidMount = () => {
    fetch(apiUrl).then(resp => resp.json()).then((data) => this.setState({...this.state, songs: data, editSongs: data}))
  }

  handleClick = (event) => {
    this.changeDisplayedSong(event.target.id)
  }

  renderSongs = () => {
    return this.state.editSongs.map(song => <tr key={song.id}><td>{song.title}</td><td>{song.singer}</td><td><button id={song.id} onClick={this.handleClick}>Play</button></td></tr>)
  }

  changeDisplayedSong = (id) => {
    let song = this.state.songs.find(song => song.id == id)
    this.setState({
      ...this.state,
      displayedSong: {
        title: song.title,
        singer: song.singer,
        lyrics: song.lyrics
      }
    })
  }

  updateSongs = (input) => {
    let filterArray;
    if (input === null) {
        filterArray = this.state.songs
    } else{
      filterArray = this.state.songs.filter(song => song.title.toLowerCase().includes(input.toLowerCase()))
      this.setState({
        ...this.state,
        editSongs: filterArray
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter updateSongs={this.updateSongs}/>
          <SongList renderSongs={this.renderSongs()}/>
        </div>
        <KaraokeDisplay song={this.state.displayedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
