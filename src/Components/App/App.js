import React, { Component } from 'react';
import './App.scss';
import '../../index.css';
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

  updateFavorites = (card) => {
    let favorited = JSON.parse(localStorage.getItem('favorites'))
    if (!favorited) {
      favorited = []
    }
    favorited.push(card)
    localStorage.setItem('favorites', JSON.stringify(favorited))
    this.setState({
      favorites: [...this.state.favorites, ...favorited]
    })
  }

  saveToFavorites = (obj) => {
    
    this.updateFavorites(obj)
  }


  render() {
    const { crawl, title, episode } = this.state.randomCrawl;
    return (
      <div className="App">
      <div className="twinkle" />
        <Menu menuSelect={this.menuSelect} />
        {!this.state.menuSelection ? 
          <ScrollingText title={title}
            crawl={crawl}
            episode={episode} /> 
          : 
          <CardContainer selectedCards={this.state.selectedCards} saveToFavorites={this.saveToFavorites}/>}
      </div>
    );
  }
}

export default App;