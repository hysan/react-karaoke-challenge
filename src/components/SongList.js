import React from 'react';
import Song from './Song';

class SongList extends React.Component {

  state = {
    currentSelectedSongTitle: '',
    currentSelectedSongLyrics: '',
  }


  handleClick = (event) => {
    console.log("you touched the butt", event.target);
    this.setState({
      currentSelectedSongTitle: event.target.title,
      currentSelectedSongLyrics: event.target.value,
    }, () => {
      this.props.playClickHandler(this.state);
    })
  }


  // createSongs = () => {
  //   const songThingies = this.props.songs.map((song) => {
  //     return (<p key={song.title}> {song.title}, by {song.singer}.
  //     <button onClick={this.handleClick} value={song.lyrics} name={song.title}>Play</button>
  //     </p>)
  //   })
  //   return songThingies;
  // }

  createSongs = () => {
    const songThingies = this.props.songs.map((song) => {
      // return (<p key={song.title}> {song.title}, by {song.singer}.
      // <button onClick={this.handleClick} value={song.lyrics} name={song.title}>Play</button>
      // </p>)

      return(
        <Song key={song.title} title={song.title} singer={song.singer} lyrics={song.lyrics} handleClick={this.handleClick} />
      )
    })
    return songThingies;
  }


  render() {
    this.createSongs()
    return(
      <table className="song-list">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Singer</th>
            <th>▶</th>
          </tr>

          {/* Your Code Goes Here */
            <div>
            {this.createSongs()}
            </div>
          }

        </tbody>
      </table>


    )
  }
}

export default SongList;


//
// const SongList = () => {
//   return (
//     <table className="song-list">
//       <tbody>
//         <tr>
//           <th>Title</th>
//           <th>Singer</th>
//           <th>▶</th>
//         </tr>
//
//         {/* Your Code Goes Here */
//
//         }
//
//       </tbody>
//     </table>
//   )
// }
//
// export default SongList;
