import React from 'react';
import './Card.scss';

const Card = ({card}) => {
  let displayedCard;
  if (Object.keys(card).includes('species')) {
    displayedCard = peopleCard(card);
  } else if (Object.keys(card).includes('model')) {
    displayedCard = vehicleCard(card);
  } else if (Object.keys(card).includes('terrain')) {
    displayedCard = planetCard(card);
  }

  return (
    <div className='card'>
      {displayedCard}
      <button className='fav-btn' onClick={
          (e) => e.target.classList.toggle('active')
        }>Favorite</button>
    </div>
  )
}

const peopleCard = (card) => {
  return (
    <div>
      <h3>{card.name}</h3>
      <div className='image-div'>
        <img src={card.image} className='image' alt={card.name}/>
      </div>
      <p>Species: {card.species}</p>
      <p>Homeworld: {card.homeworld}</p>
      <p>Homeworld population: {card.homeworldPop}</p>
    </div>
  )
}

const vehicleCard = (card) => {
  return (
    <div>
      <h3>{card.name}</h3>
      <p>Model: {card.model}</p>
      <p>Class: {card.class}</p>
      <p>Available passengers: {card.numberOfPassengers}</p>
    </div>
  )
}

const planetCard = (card) => {
  return (
    <div>
      <h3>{card.name}</h3>
        <p>Population: {card.population}</p>
        <p>Climate: {card.climate}</p>
        <p>Terrain: {card.terrain}</p>
        <p>Residents: </p>
        <ul className='residents-list'>
          {
            card.residents.map(resident => {
              return <option key={resident} value={resident}>{resident}</option>
            }) : <option>No residents listed</option>
          }
        </ul>
    </div>
  )
}

export default Card;