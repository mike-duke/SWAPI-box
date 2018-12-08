import {filmCleaner, cardCleaner} from './Helper.js';

export const getRandomFilmCrawl = async (filmUrl) => {
    const response = await fetch(filmUrl)
    if (response.ok) {
      const films = await response.json()
      const randomCrawl = filmCleaner(films)
      return randomCrawl
    } else  {
    throw new Error('Internal server error')
  }
}

export const fetchByMenu = async (selection) => {
  const url = `https://swapi.co/api/${selection}`
  const data = await tryCatch(url);
  const results = cardCleaner(data.results, selection)
  return results;
}

export const fetchProperty = async (url) => {
  let returnedValue;
  if(typeof url === 'string') {
    returnedValue = await tryCatch(url);
  } else {
    returnedValue = url.map(async address => {
      const property = await tryCatch(address)
      return property.name
    })
  }
  return returnedValue;
}

const tryCatch = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data;
  } catch(error) {
    console.log(error)
  }
}

