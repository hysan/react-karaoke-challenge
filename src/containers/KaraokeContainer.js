import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import NavBar from '../components/NavBar';
import songs from '../data/songs';
import Adapter from '../api/Adapter';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    currentSong: null,
    title: "",
    queue: [],
    showSongs: true,
  }

  componentDidMount() {
    this.loadSongs();
  }

  loadSongs = () => {
    Adapter.getSongs()
      .then(res => res.json())
      .then(json => this.setState({ songs: json }))
  }

  getSong = (id) => {
    Adapter.getSong()
      .then(res => res.json())
      .then(json => {
        this.updateSong(json);
      })
  }

  playSong = (id) => {
    if (!this.state.currentSong
      || this.state.currentSong.id !== id
      && !this.state.queue.find(song => song.id === id)
    ) {
      const currentSong = this.findSongById(id);

      Adapter.patchPlaySong(currentSong.id)
        .then(res => res.json())
        .then(json => {
          if (!this.state.currentSong) {
            this.setState({
              currentSong: json,
            });
          } else {
            const queue = [...this.state.queue, currentSong];
            this.setState({ queue }, () => { console.log(this.state.queue) });
          }

          // If this were a real API, we might want to refetch
          // everything in case others have updated things.
          // this.loadSongs();

          // However, we are not a real API. We are the only
          // ones ever updating, so we can just update the list
          // with the returned data.
          this.updateSong(json);
        })
    }
  }

  likeSong = (id) => {
    const currentSong = this.findSongById(id);

    Adapter.patchLikeSong(currentSong.id)
      .then(res => res.json())
      .then(json => {
        // Same reasoning as playSong() above for why
        // we can update with just the returned data.
        this.updateSong(json);
      })
  }

  dislikeSong = (id) => {
    const currentSong = this.findSongById(id);

    Adapter.patchDislikeSong(currentSong.id)
      .then(res => res.json())
      .then(json => {
        // Same reasoning as playSong() above for why
        // we can update with just the returned data.
        this.updateSong(json);
      })
  }

  findSongById = (id) => {
    return this.state.songs.find(song => song.id === id);
  }

  updateSong = (newSong) => {
    const songs = this.state.songs.map(song => {
      if (song.id === newSong.id) {
        return newSong;
      }
      return song;
    })

    this.setState({ songs })
  }

  updateTitle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  filteredSongs = () => {
    return this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.title.toLowerCase()));
  }

  toggleSongQueue = () => {
    this.setState(prevState => {
      return { showSongs: !prevState.showSongs };
    })
  }

  popSong = () => {
    if (this.state.queue.length > 0) {
      const currentSong = this.state.queue[0];
      const queue = this.state.queue.slice(1);

      this.setState({
        currentSong,
        queue,
      });
    } else {
      this.setState({ currentSong: null });
    }
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <NavBar showSongs={this.toggleSongQueue} showQueue={this.toggleSongQueue} />
          {
            this.state.showSongs ?
              <React.Fragment>
                <Filter title={this.state.title} handleChange={this.updateTitle} />
                <SongList songs={this.filteredSongs()} playSong={this.playSong} />
              </React.Fragment>
            :
              <SongList songs={this.state.queue} />
          }
        </div>
        <KaraokeDisplay
          {...this.state.currentSong}
          likeSong={this.likeSong}
          dislikeSong={this.dislikeSong}
          onFinish={this.popSong}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
