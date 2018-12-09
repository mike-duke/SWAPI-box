import {
  filmCleaner,
  cardCleaner
} from './Helper.js';

export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data;
  } catch (error) {
    return error.message;
  }
}
export const getRandomFilmCrawl = async (filmUrl) => {
  const films = await fetchData(filmUrl)
  const randomCrawl = filmCleaner(films)
  return randomCrawl
}

export const fetchByMenu = async (selection) => {
  const url = `https://swapi.co/api/${selection}`
  const data = await fetchData(url);
  const results = cardCleaner(data.results, selection)
  return results;
}

export const fetchProperty = async (url) => {
  let returnedValue;
  if (typeof url === 'string') {
    returnedValue = await fetchData(url);
  } else {
    returnedValue = url.map(async address => {
      const property = await fetchData(address)
      return property.name
    })
  }
  return returnedValue;
}