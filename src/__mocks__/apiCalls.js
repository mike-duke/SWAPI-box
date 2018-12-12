export const getRandomFilmCrawl = jest.fn().mockImplementation(() => {
  return Promise.resolve('Star Wars is awesome!')
})