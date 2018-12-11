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
    if (selection === 'favorites' && this.state.favorites.length === 0) {
      this.setState({
        errorMessage: 'No favorites available to display... please select another menu option above',
        selectedCards: []
      })
    } else if (selection === 'favorites') {
      let favorited = JSON.parse(localStorage.getItem('favorites'))
      this.setState({
        errorMessage: '',
        menuSelection: selection,
        selectedCards: favorited
      })
    } else if (selection === 'people' && JSON.parse(localStorage.getItem('people'))) {
      this.setState({
        errorMessage: '',
        menuSelection: selection,
        selectedCards: [...JSON.parse(localStorage.getItem('people'))]
      })
    } else if (selection === 'vehicles' && JSON.parse(localStorage.getItem('vehicles'))) {
      this.setState({
        errorMessage: '',
        menuSelection: selection,
        selectedCards: [...JSON.parse(localStorage.getItem('vehicles'))]
      })
    } else if (selection === 'planets' && JSON.parse(localStorage.getItem('planets'))) {
      this.setState({
        errorMessage: '',
        menuSelection: selection,
        selectedCards: [...JSON.parse(localStorage.getItem('planets'))]
      })
    } else {
      const response = await fetchByMenu(selection)
      localStorage.setItem(selection, JSON.stringify(response))
      this.setState({
        errorMessage: '',
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
    this.updateFavoriteStorage(card)
    favorited.push(card)
    localStorage.setItem('favorites', JSON.stringify(favorited))
    this.setState({
      favorites: [...this.state.favorites, ...favorited]
    })
  }

  updateFavoriteStorage = (card) => {
    let localStorageArray = JSON.parse(localStorage.getItem(card.type))
    localStorageArray.forEach(item => {
      if (item.name === card.name) {
        console.log('item.active before', item.active)
        item.active = !item.active
        console.log('item.active after', item.active)
      }
    })
    localStorage.setItem(card.type, JSON.stringify(localStorageArray))
  }

  removeFromFavorites = (card) => {
    let favorited = JSON.parse(localStorage.getItem('favorites'))
    let updateFavorites = favorited.filter(favorite => {
      return card.name !== favorite.name
    })
    this.updateFavoriteStorage(card)
    localStorage.setItem('favorites', JSON.stringify(updateFavorites))
    if (this.state.menuSelection === 'favorites') {
      this.setState({
        favorites: [...updateFavorites],
        selectedCards: [...updateFavorites]
      })
    } else {
      this.setState({
        favorites: [...updateFavorites]
      })
    }
  }

  handleEmptyFavorites = () => {
    if (this.state.favorites.length === 0 && this.state.menuSelection === 'favorites') {
      this.setState({
        selectedCards: ['no favorites']
      })
    }
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
                          removeFromFavorites={this.removeFromFavorites} 
                          errorMessage={this.state.errorMessage} />
          }
        
      </div>
    )
  }
}

export default App