import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  constructor(props) {
    super(props);
  }

  createSongRows = () => {
    this.props.songData.map((id,song) => (
      <tr key={song.id}>
      <td>{song.title}</td>
      <td>singer={song.singer}</td>
      </tr>
    ))
  }

  // {this.props.songData.map((id,song) => (<SongList songData={this.props.songData} />))}

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songData={this.props.songData} createSongRows={this.createSongRows}/>
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
