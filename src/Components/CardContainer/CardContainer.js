import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'
import Loading from '../Loading/Loading'
import PropTypes from 'prop-types'

const CardContainer = ({
  selectedCards, 
  saveToFavorites, 
  removeFromFavorites, 
  errorMessage, 
  loadingStatus}) => {

  let displayError;
  if (selectedCards) {
    var displayedCards = selectedCards.map(card => {
      return <Card card={card}  key={card.name} 
                                saveToFavorites={saveToFavorites}
                                removeFromFavorites={removeFromFavorites} />
    })
  } else {
    displayError = <h1 className="error-msg">{errorMessage}</h1>
  }
  if (loadingStatus) {
    return <Loading />
  } else {
    return (
      <main>
        {displayError} 
        {displayedCards}
      </main>
    )
  }
}

  CardContainer.proptypes = {
    selectedCards: PropTypes.array, 
    errorMessage: PropTypes.string, 
    saveToFavorites: PropTypes.func.isRequired, 
    removeFromFavorites: PropTypes.func.isRequired
  }

export default CardContainer
