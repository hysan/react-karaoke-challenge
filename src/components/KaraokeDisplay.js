import React, {Component} from 'react';
import Lyrics from './Lyrics';

class KaraokeDisplay extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="karaoke-display">
        <h2>Song Title</h2>
        <Lyrics lyrics={this.props.displayedLyrics} />
      </div>
    )
  }
}

export default KaraokeDisplay;
