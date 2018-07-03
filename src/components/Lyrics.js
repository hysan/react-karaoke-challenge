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
      lyrics: null,
      lyricsArray: null,
      currentWord: 0,
      timer: null,
      finished: true,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.lyrics !== state.lyrics) {
      return {
        ...state,
        lyrics: props.lyrics,
        lyricsArray: lyricsToArray(props.lyrics),
        currentWord: 0,
        finished: !props.lyrics,
      }
    }
    return null;
  }

  componentDidMount() {
    this.playLyrics();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentWord <= nextState.lyricsArray.length
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  playLyrics = () => {
    this.setState({
      timer: setInterval(this.nextWord, this.props.speed),
    });
  }

  stopTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  stopLyrics = () => {
    this.stopTimer();
    this.setState({
      timer: null,
    });
  }

  nextWord = () => {
    if (this.state.currentWord <= this.state.lyricsArray.length) {
      this.setState(prevState => {
        return { currentWord: prevState.currentWord + 1 }
      })
    } else if (!this.state.finished) {
      // TODO: figure out how to restart a timer from within a
      //       static class method: getDerivedStateFromProps.
      // this.stopLyrics();
      this.setState({ finished: true }, () => {
        !!this.props.onFinish && this.props.onFinish();
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

Lyrics.defaultProps = {
  speed: 250,
}

export default Lyrics;
