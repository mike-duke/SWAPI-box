import * as API from './apiCalls.js';
import mockData from './mockData.js';
import * as Helper from './Helper.js';
// jest.mock('./apiCalls.js');

describe('API', () => {
  let mockUrl;
  let mockResponse;

  describe('fetchData', () => {
    mockResponse = mockData.films
    let url = 'https://swapi.co/api/';

    it('should call fetch with the correct arguments', async () => {
      window.fetch = jest.fn();

      await API.fetchData(url);
      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return an object if fetch is successful', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve(mockResponse);
          }
        })
      })
      const expected = mockResponse;
      const result = await API.fetchData(url);
      expect(result).toEqual(expected);
    })

    it('should return an error if fetch is not successful', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        Promise.reject(new Error('Cannot fetch'));
      })

      const expected = 'Cannot fetch';
      const result = API.fetchData(url);
      expect(result).rejects.toEqual(expected);
    })
  })

  describe('getRandomFilmCrawl', () => {
    beforeEach(() => {
      mockUrl = 'https://swapi.co/api/films/'
      mockResponse = mockData.films
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should call fetch with correct params', async () => {
      const expected = 'https://swapi.co/api/films/';
      await API.getRandomFilmCrawl(mockUrl);

      expect(window.fetch).toHaveBeenCalledWith(expected);
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
  })

  describe('fetchByMenu', () => {
    const selection = 'people';
    const mockFetchData = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse);
    });
    API.fetchData = mockFetchData;
    
    it('should call fetchData with the correct arguments', async () => {
      Helper.cardCleaner = jest.fn();
      const expected = 'https://swapi.co/api/people';
      // url = 'https://swapi.co/api/'

      await API.fetchByMenu(selection);

      expect(mockFetchData).toHaveBeenCalledWith(expected);
    })

    it('should call cardCleaner with the correct parameters', async () => {
      Helper.cardCleaner = jest.fn();

      await API.fetchByMenu(selection);

      expect(Helper.cardCleaner).toHaveBeenCalledWith(mockResponse.results, selection);
    })

    it('should return an object if fetch was sucessful', () => {

    })
  })

  describe('fetchProperty', () => {


    it('should call fetchData with a url if it recieves a single URL as a string', () => {

    })

    it('should return a single response object if it was passed a single URL', () => {

    })

    it('should map over an array of URLs and call fetch data multiple times if it recieves an array', () => {

    })

    it('should return an array of objects if it was passed an array', () => {

    })
  })
})

