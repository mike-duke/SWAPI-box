import React from 'react';
import App from './App';
import {shallow} from 'enzyme'; 

describe('App', () => {
  let mockRandomCrawl
  let wrapper

  describe('componentDidMount', () => {
    it('should call our fetch method with the correct parameters', () => {
      // Setup
      // Execution
      // Expectation
    })

    it('calls fetchFilms when a promise has been returned from our fetch method', () => {
      // Setup
      // Execution
      // Expectation
    })

    it('should update randomCrawl in state after our fetch call has been made successfully', () => {
      // Setup
      // Execution
      // Expectation
    
    })

    it('should set an error if our fetch fails', () => {
      // Setup
      // Execution
      // Expectation

    })
  })
})

