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
  describe('menuSelect', () => {
    let mockInitialState
    beforeEach(() => {
      mockInitialState = {
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
    })
    it('should take a string of the users selection as an argument', () => {
      const wrapper = await shallow(<App/>)
      const mockSelection = 'people'
      
       wrapper.instance().menuSelect(mockSelection, () => {
       expect(wrapper.state('menuSelection')).toEqual(mockSelection)
      })
    })
    it.skip('should display an error message if there are no favorites saved and favorites have been selected', () => {
      const wrapper = shallow(<App/>)
      const mockSelection = 'favorites'

      wrapper.instance().menuSelect(mockSelection, () => {
        expect(mock)
      })
    })
  })
})

