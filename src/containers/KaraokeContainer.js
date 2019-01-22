import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state ={
    songs: [],
    selectedSongId: null,
  }

  handleClickPlay = (id) => {
    this.setState({selectedSongId: id})
  }

  findSong = () => {
    return this.state.songs.find(song => song.id == this.state.selectedSongId)}

  filterSongs = (searchInput) => {
    const copySongs = [...this.state.song]
    const filteredSongs = copySongs.filter(song => song.includes(searchInput))

    console.log(filteredSongs);
  }

  componentDidMount() {
    fetch(`http://localhost:4000/users/1/songs`)
      .then(response => response.json())
      .then(songData => {
        this.setState({songs: songData})
      })
  }

  render() {
    // console.log(this.state.songs);
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songs={this.state.songs}/>
          <SongList
            songs={this.state.songs} handleClickPlay={this.handleClickPlay}/>
        </div>
        {this.state.selectedSongId ?   <KaraokeDisplay song={this.findSong() } filterSongs={this.filterSongs}/> : null}

      </div>
    );
  }
}

export default KaraokeContainer;
