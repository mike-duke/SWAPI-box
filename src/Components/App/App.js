import React, { Component } from 'react';
import './App.scss';
import ScrollingText from '../ScrollingText/ScrollingText.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomCrawl: '', 
      errorMessage: ''
    }
  }

  fetchFilms = async (filmsUrl) => {
    try {
      const films = await fetch(filmsUrl);
      console.log('hi')
    const response = await films.json();
    const randomIndex = Math.floor(Math.random() * 8);
    const result = {
      crawl: response.results[randomIndex].opening_crawl,
      title: response.results[randomIndex].title,
      episode: response.results[randomIndex].episode_id
    }
    return result
    } catch(error) {
    this.setState({
      errorMessage: error.message
      })
    } 
  }

  async componentDidMount() {
    try {
    const url = 'https://swapi.co/api/'
    const swapiFetch = await fetch(url);
    const response = await swapiFetch.json();
    const randomCrawl = await this.fetchFilms(response.films);
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
