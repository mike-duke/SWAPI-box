export const getRandomFilmCrawl = jest.fn().mockImplementationOnce(() => {
  return Promise.resolve('Star Wars is awesome!')
}).mockImplementationOnce(() => {
  return Promise.reject(Error('Could not fetch'))
})