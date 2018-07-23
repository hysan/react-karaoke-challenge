import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';


class KaraokeContainer extends Component {
   constructor(){
     super()
     this.state={
       songList: [],
       songPlay: ""
     }
   }

   playSong = (event,song) => {
    this.setState({
      songPlay: song,
    })

   }

    handleFilter = (event,filterState) => {
      // event.preventDefault()
      // console.log(event.target.value)
    const songList=[...this.state.songList].filter(song=>{
      // console.log(song)
      return song.title.includes(event.target.value)
    })

    this.setState({
      songList
    })

    }

   componentDidMount(){
     fetch("https://demo.lovescomputers.com/users/8/songs").then(r=>r.json()).then(data=>{
       this.setState({
         songList:data
       })
     })
   }
  render() {
    // console.log(this.state.songList)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter userInput={this.handleFilter}/>
          <SongList songList={this.state.songList} songPlay={this.playSong} />
        </div>
        <KaraokeDisplay songPlay={this.state.songPlay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
