import {filmCleaner, cardCleaner} from './Helper.js';

export const getRandomFilmCrawl = async (filmUrl) => {
    const response = await fetch(filmUrl)
    try {
      const films = await response.json()
      const randomCrawl = filmCleaner(films)
      return randomCrawl
    } catch(error){
    throw new Error('Internal server error')
  }
}


export const fetchByMenu = async (selection) => {
  const url = `https://swapi.co/api/${selection}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    const results = cardCleaner(data.results, selection)
    return results;
  } catch(error) {
    console.log(error)
  }
}

