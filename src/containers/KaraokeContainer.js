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
    const copySongs = [...this.state.songs]
    const filtered = copySongs.filter(song => song.title.includes(searchInput))

    console.log(filtered);
    
    //Vicky went over this, look over the project, you're running into the same problem where it will filter but it won't accept the subsequent letters after the initial letter.
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
          <Filter songs={this.state.songs} filterSongs={this.filterSongs}/>
          <SongList
            songs={this.state.songs} handleClickPlay={this.handleClickPlay}/>
        </div>
        {this.state.selectedSongId ?   <KaraokeDisplay song={this.findSong()} /> : null}

      </div>
    );
  }
}

export default KaraokeContainer;
