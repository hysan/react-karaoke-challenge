import React, { Component } from 'react';

class Filter extends Component {
  constructor(){
    super()
    this.state={
      userInput: ""
    }
  }

handleUserInput = (event) => {
  this.setState({
    userInput: event.target.value
  })
}

  render() {
    // console.log(this.state.userInput)
    return (
      <div className="filter" onKeyUp={(event)=> this.props.userInput(event,this.state.userInput)}>
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={this.handleUserInput} />
      </div>
    );
  }
}

export default Filter;
