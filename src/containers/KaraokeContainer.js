import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songPlaying: null,
    songs: null
  };

  fetchSongs = () => {
    fetch('https://demo.lovescomputers.com/users/3/songs')
      .then(r => r.json())
      .then(r =>
        this.setState(
          {
            songPlaying: null,
            songs: r
          },
          () => console.log(this.state)
        )
      );
  };

  componentDidMount() {
    this.fetchSongs();
  }

  playHandle = event => {
    let name = event.target.dataset.name;
    this.setState(
      {
        songPlaying: name
      },
      () => console.log(this.state)
    );
  };

  songFinder = songs =>
    songs.filter(song => song.title === this.state.songPlaying)[0];

  render() {
    if (this.state.songs) {
      return (
        <div className="karaoke-container">
          <div className="sidebar">
            <Filter />
            <SongList playHandle={this.playHandle} songs={this.state.songs} />
          </div>
          <KaraokeDisplay currentSong={this.songFinder(this.state.songs)} />
        </div>
      );
    } else {
      return <h2>loading...</h2>;
    }
  }
}

export default KaraokeContainer;
