import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';
import UUID from 'uuid';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      filteredSongs: songs,
      chosenSong: "",
    }
  }

  handlePlayClick = (event) => {
    event.persist();
    const songs = this.state.songs;
    const chosenSong = songs.find(function(song) {
      return song.title === event.target.name;
    })
    this.setState({
      chosenSong
    }, () => console.log(this.state))
  }

  renderSongs = () => {
    return this.state.filteredSongs.map(song => {
      return (
        <tr key={UUID()} >
          <td>{song.title}</td>
          <td>{song.singer}</td>
          <td><button name={song.title} onClick={this.handlePlayClick}>Play</button></td>
        </tr>
      )
    })
  }

  filterSongs = (searchInput) => {
    const songs = this.state.songs
    const searchResults = songs.filter(song => (
      song.title.toLowerCase().includes(searchInput)
    ))
    this.setState({
      filteredSongs: searchResults,
    })
  }

  componentDidMount() {
    fetch('https://demo.lovescomputers.com/users/4/songs')
      .then(res => res.json())
      .then(songs => this.setState({
        songs
      }, () => console.log(this.state)))
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterSongs={this.filterSongs}/>
          <SongList renderSongs={this.renderSongs}/>
        </div>
        <KaraokeDisplay chosenSong={this.state.chosenSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
