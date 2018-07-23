import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor() {
    super();
    this.state = {
      songId: null,
      titleFilter: null,
      songsAll: null,
      songsFiltered: null,
      songsToPlay: songs
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:4000/users/7/songs")
  //     .then(result => result.json())
  //     .then(json => {
  //       console.log(json)
  //     })
  //   }

  onChange = (event) => {
    event.preventDefault()
    console.log("title filter = ", event.target.value)

    // let newArray = this.state.songsAll.filter((song) => song.name.includes(event.target.value))
    //
    // this.setState({
    //   songsToPlay: newArray,
    //   titleFilter: event.target.value,
    // })


  }


  playSong = (event) => {
    event.preventDefault();
    console.log("song id = ", event.target.id)

    this.setState({
      songId: event.target.id,
    });
  }

  renderKaraokeDisplay = () => {
    if (this.state.songId) {
      return (
        <KaraokeDisplay
          title={songs[this.state.songId].title}
          lyrics={songs[this.state.songId].lyrics}/>
      );
    } else {
        return null;
    }
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onChange={this.onChange}/>
          <SongList songs={this.state.songsToPlay} playSong={this.playSong}/>
        </div>
        {this.renderKaraokeDisplay()}
      </div>
    );
  }
}

export default KaraokeContainer;
