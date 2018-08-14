import React, { Component } from "react";
import Filter from "../components/Filter";
import SongList from "../components/SongList";
import KaraokeDisplay from "../components/KaraokeDisplay";
// import songs from "../data/songs";

const URL = "http://192.168.3.119:3000/users/3/songs";

class KaraokeContainer extends Component {
  state = {
    songs: [],
    selectedSong: {},
    searchTerm: ""
  };

  selectSongId = event => {
    let id = parseInt(event.target.id);
    this.setSong(id);
  };

  setSong = num =>
    this.setState({
      selectedSong: this.state.songs.find(song => song.id === parseInt(num))
    });

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ songs: data }));
  }

  setSearchTerm = event =>
    this.setState({ searchTerm: event.target.value }, () =>
      console.log(this.state.searchTerm)
    );

  filterSongs = () =>
    this.state.songs.filter(song =>
      song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

  // handleFilter = event => {
  //   this.setState({ searchTerm: event.target.value }, () =>
  //     this.setState({
  //       songs: this.state.songs.filter(song =>
  //         song.title.includes(this.state.searchTerm)
  //       )
  //     })
  //   );
  // };

  render() {
    console.log(this.filterSongs());
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.setSearchTerm} {...this.state} />
          <SongList
            songList={this.filterSongs()}
            songIdSelector={this.selectSongId}
          />
        </div>
        <KaraokeDisplay song={this.state.selectedSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
