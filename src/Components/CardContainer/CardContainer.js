import React, {Component} from 'react';
import {fetchByMenu} from '../../apiCalls.js';

class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      fetchedDataArray: []
    }
  }

  // async componentDidMount() {
  //   const urlSelector = this.props.menuSelection
  //   const url = `https://swapi.co/api/${urlSelector}`
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     this.setState({
  //       fetchedDataArray: data.results
  //     })
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  async componentDidMount() {
    const urlSelector = this.props.menuSelection
    const response = await fetchByMenu(urlSelector)
    this.setState({
      fetchedDataArray: response
    })
  }

  render() {
    return (
      <main>
  
      </main>
    )
  }
}

export default CardContainer;