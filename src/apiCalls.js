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
  try {
    const response = await fetch(url)
    const data = await response.json()
    const results = cardCleaner(data.results)
    console.log(results);
    // return results;
  } catch(error) {
    console.log(error)
  }
}

