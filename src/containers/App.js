import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

const songsUrl = `https://demo.lovescomputers.com/songs`

const myId = 10
const urlWithId = `https://demo.lovescomputers.com/songs/${myId}`


class App extends Component {

  componentDidMount(){
    fetch(urlWithId)
    .then(response => response.json())
    .then(data => console.log(data));
  }

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
