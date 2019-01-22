import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: null,
    input: '',
    filteredSongs: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/songs')
    .then(r => r.json())
    .then(songs => songs.map(song => Object.assign({}, song, {times_played: 0})))
    .then(songs => this.setState({
      songs: songs,
      filteredSongs: songs
    }))
  }

  clickedSong = (id) => {
    // console.log('clicked')
    // console.log(id)
    const currentSong = this.state.songs.find(song => song.id === id)
    currentSong.times_played = currentSong.times_played + 1
    // console.log(currentSong)
    this.setState({ currentSong })
    // fetch('http://localhost:4000/songs', {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     times_played: currentSong.times_played
    //   })
    // })
    // .then(console.log)

  }

  handleInputChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      input: event.target.value
    }, () => this.filterSongs())
  }

  filterSongs = () => {
    const filteredSongs = this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.input.toLowerCase()))
    // console.log(filteredSongs)
    this.setState({ filteredSongs })
  }

  render() {
    // console.log(this.state.songs)
    // console.log(this.state.currentSong)
    // console.log(this.state.input)
    // console.log(this.state.filteredSongs)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
            input={this.state.input}
            handleInputChange={this.handleInputChange}
          />
          <SongList
            clickedSong={this.clickedSong}
            songs={this.state.filteredSongs}
          />
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
