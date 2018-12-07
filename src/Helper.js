<<<<<<< HEAD

export const filmCleaner = (films) => {
=======
export const helper = (films) => {
>>>>>>> A test that checks if our fetch films method is catching an error has been impelemeted and is passing
  const randomIndex = Math.floor(Math.random() * 8);
   const result = {
       crawl: films.results[randomIndex].opening_crawl,
       title: films.results[randomIndex].title,
       episode: films.results[randomIndex].episode_id
   }
   return result
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
    console.log('error in data cleaner');
  }
}

const cleanPeople = (peopleArray) => {
  const cleanPeopleArray = peopleArray.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species,
      homeworldPop: person.homeworld,
    }
  })
  return cleanPeopleArray;
}

const cleanVehicles = (vehiclesArray) => {
  const cleanVehiclesArray = vehiclesArray.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      numberOfPassengers: vehicle.passengers
    }
  })
  return cleanVehiclesArray;
}

const cleanPlanets = (planetsArray) => {
  const cleanPlanetsArray = planetsArray.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }
  })
  return cleanPlanetsArray;
}