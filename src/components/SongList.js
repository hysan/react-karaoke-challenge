import React from 'react';
import Song from "./Song"
import UUID from "uuid"
// const SongList = () => {
//
//   //
  // handleSongList = () => {
  // //   return this.props.songList.map(song=>{
  // //     return (<Song song={song} />)
  // // }
//
//   return (
//
//   )
// }
//
// export default SongList;


 export default class SongList extends React.Component {
   handleSongList = () => {
      return this.props.songList.map(song=>{
      return <Song song={song} songPlay={this.props.songPlay} key={UUID()}/>
      }
    )}

 render() {
   console.log(this.props.songList)
return (<table className="song-list">
  <tbody>
    <tr>
      <th>Title</th>
      <th>Singer</th>
      <th>▶</th>
    </tr>
      {this.handleSongList()}
  </tbody>
</table> )
 }
 }
