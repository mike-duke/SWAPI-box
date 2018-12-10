import * as Cleaner from './Cleaner.js'; 
import mockData from './mockData.js'
import * as Image from './images/images.js';

describe('Cleaner', () => {
  describe('filmCleaner', () => {
   it('should return undefined if no arguments are provided', () => {

    expect(Cleaner.filmCleaner()).toBe(undefined)
   })

   it('should return an object in specified format', () => {
     const films = mockData.films
     const randomIndex = 0 
     const expected =  {
      crawl: films.results[randomIndex].opening_crawl,
      title: films.results[randomIndex].title,
      episode: films.results[randomIndex].episode_id
    }

    Math.random = jest.fn().mockImplementation(() => 0)
    const results = Cleaner.filmCleaner(films)

    expect(results).toEqual(expected)
   })
  })

  describe('cardCleaner', () => {
    it('should call cleanPeople if the selection passed in is "people"', async () => {
      const dataArray = [(mockData.people.results[2])]
      const expected = dataArray;
      const spy = jest.spyOn(Cleaner, 'cleanPeople').mockImplementation(() => {})
      // const mockCleanPeople = jest.fn();
      // Cleaner.cleanPeople = mockCleanPeople

      await Cleaner.cardCleaner(dataArray, 'people');

      expect(spy).toHaveBeenCalledWith(expected);
    })

    it.skip('should return a new array of people objects if the selection is "people"', () => {
      const dataArray = [(mockData.people.results[2])]
      const expected = [
        {
        image: Image.default,
        name: 'R2-D2',
        homeworld: 'Naboo',
        species: 'Droid',
        homeworldPop: '4,500,000,000',
        active: false
      }
    ]

    const results = Cleaner.cardCleaner(dataArray, 'people');

    expect(results).toEqual(expected);
    })

    it.skip('should call cleanVehicles if the selection is passed in as "vehicles"', () => {
      const dataArray = [(mockData.vehicles.results[0])]
      const expected = dataArray;
      Cleaner.cleanVehicles = jest.fn();
      const mockCleanVehicles = Cleaner.cleanVehicles;

      Cleaner.cardCleaner(dataArray);

      expect(mockCleanVehicles).toHaveBeenCalledWith(expected);
    })

    it.skip('should return a new array of vehicle objects if the selection is "vehicles"', () => {
      const dataArray = [(mockData.people.results[0])]
      const expected = [
        {
        image: Image.default,
        name: 'R2-D2',
        homeworld: 'Naboo',
        species: 'Droid',
        homeworldPop: '4,500,000,000',
        active: false
      }
    ]

    const results = Cleaner.cardCleaner(dataArray, 'vehicle');

    expect(results).toEqual(expected);
    })

    it.skip('should call cleanPlanets if the selection is passed in as "planets"', () => {
      const dataArray = [(mockData.planets.results[0])]
      const expected = dataArray;
      Cleaner.cleanPlanets = jest.fn();
      const mockCleanPlanets = Cleaner.cleanPlanets;

      Cleaner.cardCleaner(dataArray);

      expect(mockCleanPlanets).toHaveBeenCalledWith(expected);
    })

    it.skip('should return a new array of planet objects if the selection is "planets"', () => {
      const dataArray = [(mockData.planets.results[0])]
      const expected = [
        {
        image: Image.default,
        name: 'R2-D2',
        homeworld: 'Naboo',
        species: 'Droid',
        homeworldPop: '4,500,000,000',
        active: false
      }
    ]

    const results = Cleaner.cardCleaner(dataArray, 'planets');

    expect(results).toEqual(expected);
    })

    it.skip('should return an error if there was no selection', () => {
      const expected = 'error in data cleaner';

      const result = Cleaner.cardCleaner();

      expect(result).toEqual(expected);
    })
  })
})