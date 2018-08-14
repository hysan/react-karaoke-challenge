import React from 'react';

class SongList extends React.Component {

  state = {
    currentSelectedSongTitle: '',
    currentSelectedSongLyrics: '',
  }


  handleClick = (event) => {
    // console.log("you touched the butt", this.state);
    this.setState({
      currentSelectedSongTitle: event.target.name,
      currentSelectedSongLyrics: event.target.value,
    }, () => {
      this.props.playClickHandler(this.state);
    })
  }


  createSongs = () => {
    const songThingies = this.props.songs.map((song) => {
      return (<p key={song.title}> {song.title}, by {song.singer}.
      <button onClick={this.handleClick} value={song.lyrics} name={song.title}>Play</button>
      </p>)
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
