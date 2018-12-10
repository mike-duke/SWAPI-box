import * as API from './apiCalls';
import * as Image from './images/images.js';

export const filmCleaner = (films) => {
  const randomIndex = Math.floor(Math.random() * 8);
  if (films) {
    const result = {
      crawl: films.results[randomIndex].opening_crawl,
      title: films.results[randomIndex].title,
      episode: films.results[randomIndex].episode_id
    }
   return result
  } else {
    return undefined;
  }
 }

export const cardCleaner = (dataArray, selection) => {
  if(selection === 'people') {
    return cleanPeople(dataArray);
  }
  else if(selection === 'vehicles') {
    return cleanVehicles(dataArray);
  }
  else if(selection === 'planets') {
    return cleanPlanets(dataArray);
  } else {
    return 'error in data cleaner';
  }
}

const cleanPeople = async (peopleArray) => {
  const cleanPeopleArray = peopleArray.map(async person => {
    const homeworld = await API.fetchProperty(person.homeworld)
    const species = await API.fetchProperty(person.species)
    const displayedSpecies = await species[0];
    let properPopulation;
    if (homeworld.population === 'unknown') {
      properPopulation = homeworld.population
    } else {
      properPopulation = parseInt(homeworld.population).toLocaleString('en-US');
    }
    console.log(Image.default)
    const imagePath = Image.find(path => {
      return path[person.name];
    })
    console.log(imagePath[person.name]);
    return {
      image: imagePath[person.name],
      name: person.name,
      homeworld: homeworld.name,
      species: displayedSpecies,
      homeworldPop: properPopulation,
      active: false
    }
  })
  const allPeople = await Promise.all(cleanPeopleArray);
  return allPeople;
}

const cleanVehicles = (vehiclesArray) => {
  const cleanVehiclesArray = vehiclesArray.map(vehicle => {
    const imagePath = Image.find(path => {
      return path[vehicle.name];
    })
    console.log(imagePath[vehicle.name]);
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      numberOfPassengers: vehicle.passengers,
      image: imagePath[vehicle.name],
      active: false
    }
  })
  return cleanVehiclesArray;
}

const cleanPlanets = async (planetsArray) => {
  const cleanPlanetsArray = planetsArray.map(async planet => {
    const residents = await API.fetchProperty(planet.residents)
    const allResidents = await Promise.all(residents);
    const properPopulation = parseInt(planet.population).toLocaleString('en-US');
    const imagePath = Image.find(path => {
      return path[planet.name];
    })
    console.log(imagePath[planet.name]);
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: properPopulation,
      climate: planet.climate,
      residents: allResidents,
      image: imagePath[planet.name],
      active: false
    }
  })

  const allPlanets = await Promise.all(cleanPlanetsArray);
  return allPlanets;
}