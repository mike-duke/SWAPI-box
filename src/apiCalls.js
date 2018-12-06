export const getRandomFilmCrawl = async (filmUrl) => {
  try {
    const response = await fetch(filmUrl)
    const films = await response.json()
    const randomIndex = Math.floor(Math.random() * 8);
    console.log()
    const result = {
        crawl: films.results[randomIndex].opening_crawl,
        title: films.results[randomIndex].title,
        episode: films.results[randomIndex].episode_id
    }
    return result
  } catch (error) {
    throw new Error('Internal server error')
  }

}