import React, { Component } from 'react';
import './App.scss';
import * as API from '../../apiCalls.js';
import ScrollingText from '../ScrollingText/ScrollingText.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomCrawl: '', 
      errorMessage: ''
    }
  }

  async componentDidMount() {
    try {
    const url = 'https://swapi.co/api/'
    const swapiFetch = await fetch(url);
    const response = await swapiFetch.json();
    const randomCrawl = await API.getRandomFilmCrawl(response.films);
    this.setState({randomCrawl});
    } catch(error) {
      this.setState({
        errorMessage: error.message
      })
    }
  }

  render() {
    const { randomCrawl, title, episode } = this.state.randomCrawl;
    return (
      <div className="App">
        <ScrollingText title={title}
                        crawl={randomCrawl}
                        episode={episode} />
      </div>
    );
  }
}

export default App;
