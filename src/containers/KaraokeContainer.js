import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

//estoy utilizando 1 porque es mi id
//id = 1
const API = "http://localhost:4000/users/1/songs"

class KaraokeContainer extends Component {

  state = {
   songs: [],
   selectedSong: [],
   filterText: '',
 }

//obtengo mi data y la guardo en el vector correspondiente
  componentDidMount() {
    fetch(API).then(resp => resp.json())
    .then(data => this.setState({
      songs: data,
    }))
 }

// con esto manejo el boton play que tento en mi song y en esa funcion cuando llamo esto le paso el id
// que esta funcion esta esperando encuando esa especifica song y se lo paso a mi vector de canciones seleccionada

 handleClickPlay = (id) => {
  const song = this.state.songs.find(song => song.id === id )
  this.setState({
    selectedSong: song
  })
}

//basicamente guardoen mi state lo que estoy buscando
 handleFilter = (event) => {
  // console.log(event.target.value);
  // saving what Im looking for
  this.setState({
    filterText: event.target.value
  })

}

// esta funcion se ejecuta en la primera vuelta, pero en ese momento muestra todo porque esta vaacio la busqueda
filteredSongs = () => {
  console.log("Venezuela 2 se ejecuta en la primera vuelta")
  return this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.filterText) || song.title.includes(this.state.filterText) )

}


  render() {
    console.log(songs)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter}  />
          <SongList songs={this.filteredSongs()}
          handleClickPlay={this.handleClickPlay}  />
        </div>
        <KaraokeDisplay selectedSong={this.state.selectedSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
