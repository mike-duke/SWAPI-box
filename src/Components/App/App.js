import React, { Component } from 'react';
import './App.scss';
import ScrollingText from '../ScrollingText/ScrollingText.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      randomCrawl: ''
    }
  }

  fetchFilms = async (filmsUrl) => {
    const films = await fetch(filmsUrl);
    const response = await films.json();
    const randomIndex = Math.floor(Math.random() * 8);
    console.log(response.results[randomIndex].opening_crawl);
    const result = {
      crawl: response.results[randomIndex].opening_crawl,
      title: response.results[randomIndex].title,
      episode: response.results[randomIndex].episode_id
    }

    return result;
  }

  async componentDidMount() {
    const url = 'https://swapi.co/api/'
    const swapiFetch = await fetch(url);
    const response = await swapiFetch.json();
    const randomCrawl = await this.fetchFilms(response.films);
    this.setState({randomCrawl});
  }

  render() {
    const { crawl, title, episode } = this.state.randomCrawl;
    return (
      <div className="App">
        <ScrollingText title={title}
                        crawl={crawl}
                        episode={episode} />
      </div>
    );
  }
}

export default App;
