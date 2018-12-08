import * as Helper from './Helper.js'; 
import mockData from './mockData.js'


describe('Helper', () => {
  describe('filmCleaner', () => {
   it('should return undefined if no arguments are provided', () => {

    expect(Helper.filmCleaner()).toBe(undefined)
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
    const results = Helper.filmCleaner(films)

    expect(results).toEqual(expected)
   })

  })
})