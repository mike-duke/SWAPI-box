import React from 'react';
import './Card.scss';

const Card = ({card}) => {
  let displayedCard;
  if (Object.keys(card).includes('species')) {
    displayedCard = (
      <div>
        <h3>{card.name}</h3>
        <div className='image-div'>
          <img src={card.image} className='image' alt={card.name}/>
        </div>
        <p>Species: {card.species}</p>
        <p>Homeworld: {card.homeworld}</p>
        <p>Homeworld population: {card.homeworldPop}</p>
        <div className='fav-btn-div'>
          <button className='fav-btn' onClick={
            (e) => e.target.classList.toggle('active')
          }>Favorite</button>
        </div>
      </div>
    )
  } else if (Object.keys(card)[1] === 'model') {
    displayedCard = (
      <div>
        <h3>{card.name}</h3>
        <p>Model: {card.model}</p>
        <p>Class: {card.class}</p>
        <p>Available passengers: {card.numberOfPassengers}</p>
        <button className='fav-btn' onClick={
          (e) => e.target.classList.toggle('active')
        }>Favorite</button>
      </div>
    )
  } else if (Object.keys(card)[1] === 'terrain') {
    displayedCard = (
      <div>
        <h3>{card.name}</h3>
        <p>Population: {card.population}</p>
        <p>Climate: {card.climate}</p>
        <p>Terrain: {card.terrain}</p>
        <p>Residents: </p><ul className='residents-list'>
          {
            card.residents.map(resident => {
              return <li key={resident}>{resident}</li>
            })
          }
        </ul>
        <button className='fav-btn' onClick={
          (e) => e.target.classList.toggle('active')
        }>Favorite</button>
      </div>
    )
  }
  return <div className='card'>{displayedCard}</div>
}

export default Card;