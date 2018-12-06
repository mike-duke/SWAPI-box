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

  it('should match snapshot', () => {
    wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot() 
  })

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
      const defaultState = {
        randomCrawl: '', 
        errorMessage: ''
      }
      const expectedState = {
        randomCrawl: 'Star wars is awesome!', 
        errorMessage: ''
      }

       expect(wrapper.state()).toEqual(defaultState)

       wrapper.instance().fetchFilms = mockFetchFilms
       await wrapper.instance().componentDidMount()

      expect(wrapper.state()).toEqual(expectedState)
    
    })

    it('should set an error message if our fetch fails', async () => {
      const defaultState = {
        randomCrawl: '', 
        errorMessage: ''
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Could not fetch'))
      })

      const expectedState = {
        randomCrawl: '', 
        errorMessage: 'Could not fetch'
      }

      await wrapper.instance().componentDidMount()

      expect(wrapper.state()).toEqual(expectedState)

    })
  })
  describe('fetchFilms', () => {
    it('should call fetch with correct params', () => {
      const mockUrl = "https://swapi.co/api/films/"

      wrapper.instance().fetchFilms()

      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
         
    })
    it('should return an object', async () => {
      const mockUrl = "https://swapi.co/api/films/"

      const expected = {
      crawl: 'Star wars is cool!', 
      title: 'Phantom Menace',
      episode: 5
      }

      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          json: () => Promise.resolve(expected)
        })
      })

      const result = await wrapper.instance().fetchFilms(mockUrl)

      expect(result).toEqual(expected)
    })
  })
})

