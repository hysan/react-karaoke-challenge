import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {

  state = {
    myObjs: ''
  }

  myFetch = () => {
    return fetch('http://192.168.3.119:3000/users/19/songs').then(response => response.json()).then(data => this.setState({
      myObjs: data
    }))

  }

  componentDidMount() {
    this.myFetch()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer theData={this.state.myObjs}/>
      </div>
    );
  }
}

export default App;
