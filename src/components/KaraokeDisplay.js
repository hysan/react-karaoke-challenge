import React, { Component } from 'react';
import Lyrics from './Lyrics';

class KaraokeDisplay extends Component {

render() {
  return (
    <div className="karaoke-display">
      <h2>{this.props.song.title}</h2>
      <Lyrics lyrics={this.props.song.lyrics} />
    </div>
  )
}

}

export default KaraokeDisplay;
