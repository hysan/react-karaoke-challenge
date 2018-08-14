import React from 'react';

class Song extends React.Component {


  myHandleClick = (event) => {
    this.props.handleClick(event)
  }

  render() {
  return (
    <tr className="song">
      <td>{this.props.title}</td>
      <td>{this.props.singer}</td>
      <td><button onClick={this.myHandleClick} value={this.props.lyrics} title={this.props.title} >Play</button></td>
    </tr>
  )
}
}

export default Song;
