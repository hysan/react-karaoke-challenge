import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

const API = 'http://192.168.3.119:3000/users/14/songs'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songData: []
    };
   }

  componentDidMount() {
      fetch(API)
        .then(resp => resp.json())
        .then(data => this.setState({songData:data}))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer songData={this.state.songData}/>
      </div>
    );
  }
}

export default App;
