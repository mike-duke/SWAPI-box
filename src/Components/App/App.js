import React, { Component } from 'react';
import './App.scss';
import * as API from '../../apiCalls.js';
import ScrollingText from '../ScrollingText/ScrollingText.js';
import Menu from '../Menu/Menu.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomCrawl: '', 
      errorMessage: '',
      menuSelection: ''
    }
  }
  menuSelect = (selection) => { 
    this.setState({
      menuSelection: selection
    })
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
    const { crawl, title, episode } = this.state.randomCrawl;
    return (
      <div className="App">
        <Menu menuSelect={this.menuSelect} />
        {!this.state.menuSelection ? 
          <ScrollingText title={title}
            crawl={crawl}
            episode={episode} /> 
          : 
          <CardContainer menuSelection={this.state.menuSelection}/>}
      </div>
    );
  }
}

export default App;