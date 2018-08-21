import React, { Component } from 'react';
import Lyrics from './Lyrics';



export default class KaraokeDisplay extends Component{


  render(){
    return (
      <div className="karaoke-display">
        <h2>{this.props.song.title ? this.props.song.title : "No Song Playing" }</h2>
        <Lyrics lyrics={this.props.song.lyrics ? this.props.song.lyrics : "please play a song"} />
      </div>
    )
  }

}
