import * as API from './apiCalls.js'
import mockData from './mockData.js'

describe('API', () => {
  let mockUrl; 
  let mockResponse; 
  describe('getRandomFilmCrawl', () => {
    beforeEach(() => {
      mockUrl = 'https://swapi.co/api/films/'
      mockResponse =  mockData.films
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    }) 
    it('should call fetch with correct params', () => {
      const expeceted = mockResponse

      API.getRandomFilmCrawl(mockUrl)

      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })
    it('should return an expected object if everything is ok', async () => {
      let randomIndex = 0 

      const expected = {
        crawl: mockData.films.results[randomIndex].opening_crawl,
        title: mockData.films.results[randomIndex].title, 
        episode: mockData.films.results[randomIndex].episode_id
      }
  
      Math.random = jest.fn().mockImplementation(() => 0)
      const result = await API.getRandomFilmCrawl(mockUrl)


      expect(result).toEqual(expected)
    })
    it('should throw an error if we are unable to get our expected object', async() => {
      const expectedError = Error('Internal server error')

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      
      expect(API.getRandomFilmCrawl(mockUrl)).rejects.toEqual(expectedError)
    })
  })
})