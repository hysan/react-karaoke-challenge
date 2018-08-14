import React from 'react';
import Lyrics from './Lyrics';

class KaraokeDisplay extends React.Component {


  render() {
    // console.log(this.props)
    return(
      <div className="karaoke-display">
        <h2>Song Title: {this.props.currentSelectedSong.currentSelectedSongTitle}</h2>
        <Lyrics lyrics={this.props.currentSelectedSong.currentSelectedSongLyrics} />
      </div>
    )
  }
}

export default KaraokeDisplay;











//
// const KaraokeDisplay = () => {
//   return (
//     <div className="karaoke-display">
//       <h2>Song Title</h2>
//       <Lyrics lyrics="example song lyrics" />
//     </div>
//   )
// }
//
// export default KaraokeDisplay;
