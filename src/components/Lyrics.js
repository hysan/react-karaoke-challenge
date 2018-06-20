import React, { Component } from 'react';

function lyricsToArray(lyrics) {
  if (lyrics) {
    const lines = lyrics.split('\n');
    const words = lines.reduce((words, line) => {
      words = words.concat(line.split(' '))
      words.push('\n');
      return words;
    }, []);
    return words;
  }
  return [];
}

class Lyrics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lyrics: this.props.lyrics,
      lyricsArray: lyricsToArray(this.props.lyrics),
      currentWord: 0,
      timer: null,
    }
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(this.nextWord, 250),
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.lyrics !== state.lyrics) {
      return {
        lyrics: props.lyrics,
        lyricsArray: lyricsToArray(props.lyrics),
        currentWord: 0,
        timer: state.timer,
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentWord <= nextState.lyricsArray.length
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  nextWord = () => {
    if (this.state.currentWord <= this.state.lyricsArray.length) {
      this.setState(prevState => {
        return { currentWord: prevState.currentWord + 1 }
      })
    }
  }

  renderHighlightedLyrics = () => {
    const { lyricsArray, currentWord } = this.state;
    if (currentWord === 0) {
      return null;
    }
    return <span className="highlight"> {lyricsArray.slice(0, currentWord).join(' ')}</span>
  }

  renderRemainingLyrics = () => {
    const { lyricsArray, currentWord } = this.state;
    return <span className="unhighlighted">{lyricsArray.slice(currentWord).join(' ')}</span>
  }

  render() {
    return (
      <div className="lyrics">
        <pre>
          { this.renderHighlightedLyrics() } { this.renderRemainingLyrics() }
        </pre>
      </div>
    );
  }
}

export default Lyrics;
