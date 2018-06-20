import React, { Component } from 'react';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Karaoke Time!</h1>
        <KaraokeContainer />
      </div>
    );
  }
}

export default App;
