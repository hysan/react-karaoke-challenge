import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

/*
App
  Header
  KaraokeContainer
    <Filter />
    <SongList />
      Song
    <KaraokeDisplay />
      Lyrics

x  NavBar
x  VoteBar
Song
      */

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer />
      </div>
    );
  }
}

export default App;
