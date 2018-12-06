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
  })
})