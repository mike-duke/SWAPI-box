import React from 'react';
import './Card.scss';

const Card = ({card}) => {
  let displayedCard;
  if (Object.keys(card).includes('species')) {
    displayedCard = (
      <div>
        <h2>{card.name}</h2>
        <div className='fav-btn-div'>
          <button className='fav-btn' onClick={
            (e) => e.target.classList.toggle('active')
          }>Favorite</button>
        </div>
        <div className='image-div'>
          <img src={card.image} className='image' alt={card.name}/>
        </div>
        <p>Species: {card.species}</p>
        <p>Homeworld: {card.homeworld}</p>
        <p>Homeworld population: {card.homeworldPop}</p>
      </div>
    )
  } else if (Object.keys(card)[1] === 'model') {
    displayedCard = (
      <div>
        <h2>{card.name}</h2>
        <div className="fav-btn-div">
          <button className='fav-btn' onClick={
            (e) => e.target.classList.toggle('active')
          }>Favorite</button>
        </div>
        <div className='image-div'>
          <img src={card.image} className='image' alt={card.name}/>
        </div>
        <p>Model: {card.model}</p>
        <p>Class: {card.class}</p>
        <p>Available passengers: {card.numberOfPassengers}</p>
      </div>
    )
  } else if (Object.keys(card)[1] === 'terrain') {
    displayedCard = (
      <div>
        <h2>{card.name}</h2>
        <div className="fav-btn-div">
          <button className='fav-btn' onClick={
            (e) => e.target.classList.toggle('active')
          }>Favorite</button>
        </div>
        <div className='image-div'>
          <img src={card.image} className='image' alt={card.name}/>
        </div>
        <p className="short-space">Population: {isNaN(parseInt(card.population)) ? 'Uninhabited' : card.population}</p>
        <p className="short-space">Climate: {card.climate}</p>
        <p className="short-space">Terrain: {card.terrain}</p>
        <p className="residents-p">Residents:  </p>
        <select className='residents-list'>
          {card.residents.length ?
            card.residents.map(resident => {
              return <option key={resident} value={resident}>{resident}</option>
            }) : <option>No residents listed</option>
          }
        </select>
      </div>
    )
  }
  return <div className='card'>{displayedCard}</div>
}

export default Card;