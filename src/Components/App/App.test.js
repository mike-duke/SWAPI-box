import React from 'react';
import App from './App';
import {shallow} from 'enzyme'; 
import * as API from '../../apiCalls.js'
import mockData from '../../mockData';
jest.mock('../../apiCalls.js')



describe('App', () => {
  let mockRandomCrawl
  let wrapper
  let mockUrl
  let mockResponse
  // let mockFetchFilms
  let mockSwapiFetch

  it('should match snapshot', () => {
    wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot() 
  })

  describe('componentDidMount', () => {
    let wrapper;
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

    })

    it('calls API.getRandomFilmCrawl with the correct params', async () => {
      const expected = 'https://swapi.co/api/films'

      await wrapper.instance().componentDidMount()

      expect(API.getRandomFilmCrawl).toHaveBeenCalledWith(expected)
    })

    it('should update randomCrawl in state after our fetch call has been made successfully', async () => {
      const wrapper = shallow(<App />)
     
      const expectedState = {
      randomCrawl: "Star wars is awesome", 
      errorMessage: '',
      menuSelection: '',
      favorites: [],
      selectedCards: [],
      people: [],
      vehicles: [],
      planets: [],
      loadingStatus: false
      }
      
      wrapper.instance().componentDidMount(() => {
        expect(wrapper.state()).toEqual(expectedState)
      })

    })

    it('should set an error message if our fetch fails', async () => {
      const defaultState = {
        randomCrawl: '', 
        errorMessage: '',
        menuSelection: '',
        favorites: [],
        selectedCards: [],
        people: [],
        vehicles: [],
        planets: [],
        loadingStatus: false
      }
      
      jest.fn().mockImplementation(() => {})

      const expectedState = {
        randomCrawl: '', 
        errorMessage: 'Could not fetch',
        menuSelection: '',
        favorites: [],
        selectedCards: [],
        people: [],
        vehicles: [],
        planets: [],
        loadingStatus: false
      }

      wrapper.instance().componentDidMount(() => {
        expect(wrapper.state()).toEqual(expectedState)
      })
    })
  })
})

