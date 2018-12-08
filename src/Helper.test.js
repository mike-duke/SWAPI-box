import * as Helper from './Helper.js'; 

describe('Helper', () => {
  describe('filmCleaner', () => {
   it('should return undefined if no arguments are provided', () => {

    expect(Helper.filmCleaner()).toBe(undefined)
   })
  })
})