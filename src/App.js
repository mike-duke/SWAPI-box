import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    const randomIndex = Math.floor(Math.random() * 7);
    const result = response.results[randomIndex].opening_crawl;
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
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
