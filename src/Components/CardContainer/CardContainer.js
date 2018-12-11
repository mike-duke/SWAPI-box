import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'
import Loading from '../Loading/Loading'

const CardContainer = ({selectedCards, saveToFavorites, removeFromFavorites, errorMessage, loadingStatus}) => {
  if (selectedCards) {
    var displayedCards = selectedCards.map(card => {
      return <Card card={card}  key={card.name} 
                                saveToFavorites={saveToFavorites}
                                removeFromFavorites={removeFromFavorites} />
    })
  }
  if (loadingStatus) {
    return <Loading />
  } else {
    return (
      <main>
        <h1 className="error-msg">{errorMessage}</h1>
        {displayedCards}
      </main>
    )
  }
}

export default CardContainer
