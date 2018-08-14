import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    filter: '',
    song: {
      id: -1,
      title: '',
      singer: '',
      lyrics: '',
      plays: -1,
      likes: -1,
      dislikes: -1
    }
  }

  changeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  filterSongs = () => {
    return songs.filter(song => {
      return song.title.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }

  playSong = (id) => {
    this.setState({
      song: songs.find(song => song.id === id)
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter changeFilter={this.changeFilter} filter={this.state.filter} />
          <SongList songs={this.filterSongs()} playSong={this.playSong} />
        </div>
        <KaraokeDisplay song={this.state.song} />
      </div>
    );
  }

  componentDidMount(){
    this.fetchSongs()
  }

  fetchSongs = () => {
    fetch('http://192.168.3.119:3000/songs')
    .then(res=>res.json())
    .then(data=>this.setState({
      songs: data
    }))
  }
}

export default KaraokeContainer;
