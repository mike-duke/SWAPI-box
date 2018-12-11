import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = ({selectedCards, saveToFavorites, removeFromFavorites}) => {
  const displayedCards = selectedCards.map(card => {
    return <Card card={card}  key={card.name} 
                              saveToFavorites={saveToFavorites}
                              removeFromFavorites={removeFromFavorites} />
  })
    return (
      <main>
        {displayedCards}
      </main>
    )
  }

export default CardContainer
