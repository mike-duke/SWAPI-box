import * as Cleaner from './Cleaner.js'; 
import mockData from './mockData.js'


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
    it('should call cleanPeople if the selection passed in is "people"', () => {
      const dataArray = [(mockData.people.results[0])]
      
      const expected = dataArray;
      const mockCleanPeople = jest.fn();
      Cleaner.cleanPeople = mockCleanPeople

      Cleaner.cardCleaner(dataArray);

      expect(Cleaner.cleanPeople).toHaveBeenCalledWith(expected);
    })

    it('should call cleanVehicles if the selection is passed in as "vehicles"', () => {

    })

    it('should call cleanPlanets if the selection is passed in as "planets"', () => {

    })

    it('should return an error if there was no selection', () => {

    })
  })
})