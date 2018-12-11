import React, { Component } from 'react'
import './App.scss'
import '../../index.css'
import * as API from '../../apiCalls.js'
import ScrollingText from '../ScrollingText/ScrollingText.js'
import Menu from '../Menu/Menu.js'
import CardContainer from '../CardContainer/CardContainer.js'
import {fetchByMenu} from '../../apiCalls.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      randomCrawl: '', 
      errorMessage: '',
      menuSelection: '',
      favorites: [],
      selectedCards: [],
      people: [],
      vehicles: [],
      planets: []
    }
  }
  
  menuSelect = async(selection) => { 
    if (selection === 'favorites') {
      let favorited = JSON.parse(localStorage.getItem('favorites'))
      this.setState({
        menuSelection: selection,
        selectedCards: favorited
      })
    } else if (selection === 'people' && JSON.parse(localStorage.getItem('people'))) {
      this.setState({
        menuSelection: selection,
        selectedCards: [...JSON.parse(localStorage.getItem('people'))]
      })
    } else if (selection === 'vehicles' && JSON.parse(localStorage.getItem('vehicles'))) {
      this.setState({
        menuSelection: selection,
        selectedCards: [...JSON.parse(localStorage.getItem('vehicles'))]
      })
    } else if (selection === 'planets' && JSON.parse(localStorage.getItem('planets'))) {
      this.setState({
        menuSelection: selection,
        selectedCards: [...JSON.parse(localStorage.getItem('planets'))]
      })
    } else {
      const response = await fetchByMenu(selection)
      localStorage.setItem(selection, JSON.stringify(response))
      this.setState({
        menuSelection: selection,
        selectedCards: response,
        [selection]: response
      })
    }
  }

  async componentDidMount() {
    try {
    const url = 'https://swapi.co/api/films'
    const randomCrawl = await API.getRandomFilmCrawl(url)
    this.setState({randomCrawl})
    } catch(error) {
      this.setState({
        errorMessage: error.message
      })
    }
  }

  saveToFavorites = (card) => {
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

  removeFromFavorites = (card) => {
    let favorited = JSON.parse(localStorage.getItem('favorites'))
    let updateFavorites = favorited.filter(favorite => {
      return card.name !== favorite.name
    })
    localStorage.setItem('favorites', JSON.stringify(updateFavorites))
    this.setState({
      favorites: [...updateFavorites],
      selectedCards: [...updateFavorites]
    })
  }

  render() {
    const { crawl, title, episode } = this.state.randomCrawl
    return (
      <div className="App">
      <div className="twinkle" />
        <Menu menuSelect={this.menuSelect} 
              favorites={this.state.favorites} />
        {!this.state.menuSelection ? 
          <ScrollingText title={title}
            crawl={crawl}
            episode={episode} /> 
          : 
          <CardContainer  selectedCards={this.state.selectedCards} 
                          saveToFavorites={this.saveToFavorites}
                          removeFromFavorites={this.removeFromFavorites} />}
      </div>
    )
  }
}

export default App