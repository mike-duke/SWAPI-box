import React, {Component} from 'react';

class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      fetchedDataArray: []
    }
  }

  async componentDidMount() {
    const urlSelector = this.props.menuSelection
    const url = `https://swapi.co/api/${urlSelector}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({
        fetchedDataArray: data.results
      })
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <main>
  
      </main>
    )
  }
}

export default CardContainer;