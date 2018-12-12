import { fetchData } from './fetchData';
import mockData from '../mockData';

describe('fetchData', () => {
  let mockResponse;
  let url;

  describe('fetchData', () => {
    mockResponse = mockData.films
    url = 'https://swapi.co/api/';

    it('should call fetch with the correct arguments', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve(mockResponse.results);
          }
        })
      })

      const expected = 'https://swapi.co/api/'

      await fetchData(url);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('should return an object if fetch is successful', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve(mockResponse.results);
          }
        })
      })

      const expected = mockResponse.results;
      const result = await fetchData(url);
      expect(result).toEqual(expected);
    })

    it('should return an error if fetch is not successful', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
      }))

      const expected = 'Error: Cannot fetch your data';
      const result = await fetchData(url);
      expect(result).toEqual(expected);
    })
  })
})