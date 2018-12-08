import React, {Component} from 'react';
import {fetchByMenu} from '../../apiCalls.js';
import Card from '../Card/Card';
import './CardContainer.scss';

const CardContainer = ({selectedCards}) => {
  const displayedCards = selectedCards.map(card => {
    return <Card card={card} key={card.name}/>
  })
    return (
      <main>
        {displayedCards}
      </main>
    )
  }


export default CardContainer;