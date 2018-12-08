import React from 'react';
import './Card.scss';

const Card = ({card}) => {
  let displayedCard;
  if (Object.keys(card)[2] === 'species') {
    displayedCard = (
      <div>
        <h3>{card.name}</h3>
        <p>{card.homeworld}</p>
        <p>{card.species}</p>
        <p>{card.homeworldPop}</p>
        <button className='fav-btn' onClick={
          (e) => e.target.classList.toggle('active')
        }>Favorite</button>
      </div>
    )
  } else if (Object.keys(card)[1] === 'model') {
    displayedCard = (
      <div>
        <h3>{card.name}</h3>
        <p>{card.model}</p>
        <p>{card.class}</p>
        <p>{card.numberOfPassengers}</p>
        <button className='fav-btn' onClick={
          (e) => e.target.classList.toggle('active')
        }>Favorite</button>
      </div>
    )
  } else if (Object.keys(card)[1] === 'terrain') {
    displayedCard = (
      <div>
        <h3>{card.name}</h3>
        <p>{card.population}</p>
        <p>{card.climate}</p>
        <p>{card.terrain}</p>
          {
            card.residents.map(resident => {
              return <p key={resident}>{resident}</p>
            })
          }
        <button className='fav-btn' onClick={
          (e) => e.target.classList.toggle('active')
        }>Favorite</button>
      </div>
    )
  }
  return <div className='card'>{displayedCard}</div>
}

export default Card;