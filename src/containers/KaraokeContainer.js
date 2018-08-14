import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {


  state = {
    playlist: [],
    lyricsDisplay: {}
  }
  
  
  componentDidMount() {
    return fetch('http://192.168.3.119:3000/users/1/songs').then(res => res.json()).then(res => this.setState({
      ...this.state,
      playlist: res
    }))
  }

  clickPlay = (songObj) => {
    this.setState({
      ...this.state,
      lyricsDisplay: songObj
    })
  }
  
  
  
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList playList={this.state.playlist} clickPlay={this.clickPlay}/>
        </div>
        <KaraokeDisplay songToDisplay={this.state.lyricsDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
