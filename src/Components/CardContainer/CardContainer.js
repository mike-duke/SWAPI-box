import React, {Component} from 'react';
import {fetchByMenu} from '../../apiCalls.js';
import Card from '../Card/Card';
import './CardContainer.scss';

const CardContainer = ({selectedCards, saveToFavorites}) => {
  const displayedCards = selectedCards.map(card => {
    return <Card card={card} key={card.name} saveToFavorites={saveToFavorites}/>
  })
    return (
      <main>
        {displayedCards}
      </main>
    )
  }


export default CardContainer;