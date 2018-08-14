import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

    play = (lyrics) => {
        const ly = lyrics
        console.log(ly);
        
        
      return <KaraokeDisplay songLyrics={ly}/>
    }

    render() {
        return (
            <div className="karaoke-container">
                <div className="sidebar">
                <Filter />
                <SongList  songs={songs} play={this.play}/>
                </div>
                <KaraokeDisplay songLyrics={this.play()}/>
            </div>
        );
    }
}

export default KaraokeContainer;
