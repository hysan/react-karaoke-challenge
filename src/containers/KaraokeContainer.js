import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      filter: "",
      // filteredSongs: songs,
      currentSong: null,
    }
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs = () => {
    fetch(`http://localhost:3000/users/1/songs`)
      .then(res => res.json())
      .then(json => {
        this.setState({ songs: json, filteredSongs: json })
      })
  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value,
    })
  }

  handleFilter = (query) => {
    console.log(query);
    const songs = this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(query.toLowerCase());
    })

    this.setState({ filteredSongs: songs });
  }

  filteredSongs = () => {
    return this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(this.state.filter.toLowerCase());
    })
  }

  handleClick = (event, id) => {
    console.log(event, id);
    const currentSong = this.state.songs.find(song => song.id === id);
    this.setState({ currentSong });
  }

  render() {
    // console.log(this.state.currentSong);
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
            handleFilter={this.handleFilter}
            filter={this.state.filter}
            handleChange={this.handleChange}
          />
        <SongList
          songs={this.filteredSongs()}
          handleClick={this.handleClick}
        />
        </div>
        <KaraokeDisplay
          currentSong={this.state.currentSong}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
