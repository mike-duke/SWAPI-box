import {helper} from './Helper.js';

export const getRandomFilmCrawl = async (filmUrl) => {
    const response = await fetch(filmUrl)
    if (response.ok) {
      const films = await response.json()
      const randomCrawl = helper(films)
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
      return data.results;
    } catch(error) {
      console.log(error)
    }
  }

