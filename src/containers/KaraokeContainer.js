import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    songsCopy: [],
    song: {}
  }

  componentDidMount() {
    fetch('http://192.168.3.119:3000/users/9/songs').then(resp => resp.json()).then(data => this.setState({
    ...this.state,  
    songs: [...data],
    songsCopy: [...data]
    }))
  }

  handlePlayButton = (event) => {
    // console.log("ive been clicked")
    let songObj = this.state.songs.find(song => song.id === parseInt(event.target.name));
    // console.log(songObj)
    this.setState({
      ...this.state,
      song: {...songObj}
    })
  }

  handleFilter = (name) => {
    let newArr = this.state.songs.filter(songObj => songObj.title.toLowerCase().includes(name.toLowerCase()) )

    this.setState({
      ...this.state,
      songsCopy: [...newArr]
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter} />
          <SongList songs={this.state.songsCopy} handlePlayButton={this.handlePlayButton} />
        </div>
        <KaraokeDisplay song={this.state.song} />
      </div>
    );
  }
}

export default KaraokeContainer;
