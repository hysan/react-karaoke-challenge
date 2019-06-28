import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songPlaying: null,
    songs: null,
    searchFilter: ''
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
    let id = event.target.dataset.id;
    this.setState({
      songPlaying: id
    });
    fetch(`https://demo.lovescomputers.com/users/3/songs/${id}/play`, {
      method: 'PATCH'
    });
  };

  filterHandle = event => {
    console.log(event.target.value);
    this.setState(
      Object.assign({}, this.state, { searchFilter: event.target.value })
    );
  };

  songFinder = songs =>
    songs.filter(song => song.id === parseInt(this.state.songPlaying))[0];

  render() {
    if (this.state.songs) {
      return (
        <div className="karaoke-container">
          <div className="sidebar">
            <Filter filterHandle={this.filterHandle} />
            <SongList
              playHandle={this.playHandle}
              songs={this.state.songs}
              searchFilter={this.state.searchFilter}
            />
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
