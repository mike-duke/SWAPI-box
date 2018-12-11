import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = ({selectedCards, saveToFavorites, removeFromFavorites, errorMessage}) => {
  if (selectedCards) {
    var displayedCards = selectedCards.map(card => {
      return <Card card={card}  key={card.name} 
                                saveToFavorites={saveToFavorites}
                                removeFromFavorites={removeFromFavorites} />
    })
  }
    return (
      <main>
        <h1 className="error-msg">{errorMessage}</h1>
        {displayedCards}
      </main>
    )
  }

export default CardContainer
