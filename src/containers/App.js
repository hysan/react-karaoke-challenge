import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';
// import songs from '../data/songs.js'

// const userId = 1
class App extends Component {

  // state = {
  //   songs: songs
  // }

  // state = {
  //   songs: []
  // }

  
   
  

  // componentDidMount() {
  //   fetch(`http://localhost:4000/users/${userId}/songs`)
  //   .then(res => res.json())
  //   .then (songs => this.setState({songs: songs}))
  // }

  render() {
    // console.log("State in App", this.state)
    // console.log(userId)

    return (
      <div className="app">
        <Header />
        <KaraokeContainer  />
      </div>
    );
  }
}

export default App;
