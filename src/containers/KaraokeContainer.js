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
    }
  }

  renderSongs = () => {
    return songs.map(song => {
      return (
        <tr key={UUID()}>
          <td>{song.title}</td>
          <td>{song.singer}</td>
          <td><button>Play</button></td>
        </tr>
      )
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
          <Filter />
          <SongList renderSongs={this.renderSongs}/>
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
