import React, { Component } from 'react'
import './App.scss'
import '../../index.css'
import * as API from '../../helpers/apiCalls';
import ScrollingText from '../ScrollingText/ScrollingText.js'
import Menu from '../Menu/Menu.js'
import CardContainer from '../CardContainer/CardContainer.js'
import {Route, Switch} from 'react-router-dom'


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
      planets: [],
      loadingStatus: false
    }
  }

  componentDidMount() {
    try {
    const url = 'https://swapi.co/api/films'
    return this.setState({loadingStatus: true}, 
      async () => {
        const randomCrawl = await API.getRandomFilmCrawl(url)
        this.setState({
          randomCrawl, 
          loadingStatus: false
        })
      })
    } catch(error) {
      this.setState({
        errorMessage: error.message,
        loadingStatus: false
      })
    }
  }
  
  menuSelect = async (selection) => {
    if (selection === 'favorites' && (!localStorage.getItem('favorites') || JSON.parse(localStorage.getItem('favorites')).length === 0)) {
      this.setState({
        errorMessage: 'No favorites available to display... please select another menu option above',
        selectedCards: []
      })
    } else if (selection === 'favorites' && localStorage.getItem('favorites')) {
      let favorited = JSON.parse(localStorage.getItem('favorites'))
      this.setState({
        errorMessage: '',
        menuSelection: selection,
        selectedCards: favorited
      })
    } else if (selection !== 'favorites' && JSON.parse(localStorage.getItem(selection))) {
      this.setState({
        errorMessage: '',
        menuSelection: selection,
        selectedCards: [...JSON.parse(localStorage.getItem(selection))]
      })
    } else {
      this.setState({
        loadingStatus: true
      }, async () => {
        const response = await API.fetchByMenu(selection)
        localStorage.setItem(selection, JSON.stringify(response))
        this.setState({
          loadingStatus: false,
          errorMessage: '',
          menuSelection: selection,
          selectedCards: response,
          [selection]: response
        })
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

  // handleFavorites = () => {
  //   if (!localStorage.getItem('favorites') || JSON.parse(localStorage.getItem('favorites')).length === 0) {
  //     this.setState({
  //       errorMessage: 'No favorites available to display... please select another menu option above',
  //       selectedCards: []
  //     })
  //   } else {
  //     const favorites = JSON.parse(localStorage.getItem('favorites'));
  //     this.setState({
  //       errorMessage: '',
  //       selectedCards: favorites
  //     })
  //   }

  //   return (
  //     <CardContainer  
  //                 selectedCards={this.state.selectedCards} 
  //                 saveToFavorites={this.saveToFavorites}
  //                 removeFromFavorites={this.removeFromFavorites} 
  //                 errorMessage={this.state.errorMessage} 
  //                 loadingStatus={this.state.loadingStatus} />
  //   )
  // }

  render() {
    const { crawl, title, episode, date } = this.state.randomCrawl
    const cardContainer =  <CardContainer  
                  selectedCards={this.state.selectedCards} 
                  saveToFavorites={this.saveToFavorites}
                  removeFromFavorites={this.removeFromFavorites} 
                  errorMessage={this.state.errorMessage} 
                  loadingStatus={this.state.loadingStatus} />
    return (
      <div className="App">
      <div className="twinkle" />
        <Menu menuSelect={this.menuSelect} 
              favorites={this.state.favorites} />
      <Switch>
        <Route exact path="/" render={() => 
        <ScrollingText title={title}
                       crawl={crawl}
                       episode={episode} 
                       date={date} 
                       loadingStatus={this.state.loadingStatus} />} />
        <Route exact path="/people" render={() => cardContainer} />
        <Route exact path="/vehicles" render={() => cardContainer} />
        <Route exact path="/planets" render={() => cardContainer} />
        <Route exact path="/favorites" render={() => {
          return (
            <CardContainer  
                  selectedCards={JSON.parse(localStorage.getItem('favorites'))} 
                  saveToFavorites={this.saveToFavorites}
                  removeFromFavorites={this.removeFromFavorites} 
                  errorMessage={this.state.errorMessage} 
                  loadingStatus={this.state.loadingStatus} />
          )
        }} />
      </Switch>
      </div>
    )
  }
}

export default App


  
 