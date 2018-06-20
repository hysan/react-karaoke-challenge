import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

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
