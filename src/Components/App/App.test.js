import React from 'react';
import App from './App';
import {shallow} from 'enzyme'; 

describe('App', () => {
  let mockRandomCrawl
  let wrapper
  let mockUrl
  let mockResponse
  let mockFetchFilms
  let mockSwapiFetch

  describe('componentDidMount', () => {
    beforeEach(() => {
      wrapper = shallow(<App />)
      mockUrl = 'https://swapi.co/api/'
      mockResponse = {
        "people": "https://swapi.co/api/people/",
        "planets": "https://swapi.co/api/planets/",
        "films": "https://swapi.co/api/films/",
        "species": "https://swapi.co/api/species/",
        "vehicles": "https://swapi.co/api/vehicles/",
        "starships": "https://swapi.co/api/starships/"
    }
      mockFetchFilms =  jest.fn().mockImplementation(() => {
        return Promise.resolve('Star wars is awesome!')
      })

      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should call our fetch method with the correct parameters', () => {
      const expected = mockUrl
      
      wrapper.instance().componentDidMount()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('calls fetchFilms with the correct params', async () => {
      const mockUrl = 'https://swapi.co/api/films/'
      const expected = mockUrl
      wrapper.instance().fetchFilms = mockFetchFilms

      await wrapper.instance().componentDidMount()

      expect(mockFetchFilms).toHaveBeenCalledWith(expected)
    })

    it('should update randomCrawl in state after our fetch call has been made successfully', async () => {
      // Setup
      const defaultState = {
        randomCrawl: ''
      }
      const expectedState = {
        randomCrawl: 'Star wars is awesome!'
      }
       expect(wrapper.state()).toEqual(defaultState)

       wrapper.instance().fetchFilms = mockFetchFilms
      // Execution
      await wrapper.instance().componentDidMount()

      // Expectation
      expect(wrapper.state()).toEqual(expectedState)
    
    })

    it.skip('should set an error if our fetch fails', () => {
      // Setup
      // Execution
      // Expectation

    })
  })
})

