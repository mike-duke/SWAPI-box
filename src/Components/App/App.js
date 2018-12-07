import React, { Component } from 'react';
import './App.scss';
import * as API from '../../apiCalls.js';
import ScrollingText from '../ScrollingText/ScrollingText.js';
import Menu from '../Menu/Menu.js';
import CardContainer from '../CardContainer/CardContainer.js';
import {fetchByMenu} from '../../apiCalls.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      randomCrawl: '', 
      errorMessage: '',
      menuSelection: '',
      favorites: [],
      selectedCards: []
    }
  }
  
  menuSelect = async(selection) => { 
    const response = await fetchByMenu(selection)
    this.setState({
      menuSelection: selection,
      selectedCards: response
    })
  }

  async componentDidMount() {
    try {
    const url = 'https://swapi.co/api/films'
    const randomCrawl = await API.getRandomFilmCrawl(url);
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
          <CardContainer selectedCards={this.state.selectedCards}/>}
      </div>
    );
  }
}

export default App;