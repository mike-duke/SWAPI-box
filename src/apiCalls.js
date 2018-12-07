export const getRandomFilmCrawl = async (filmUrl) => {

    const response = await fetch(filmUrl)
    if (response.ok) {
      const films = await response.json()
      const randomCrawl = helper(films)
      return randomCrawl
    } else  {
    throw new Error('Internal server error')
  }

}



 const helper = (films) => {
   const randomIndex = Math.floor(Math.random() * 8);
    const result = {
        crawl: films.results[randomIndex].opening_crawl,
        title: films.results[randomIndex].title,
        episode: films.results[randomIndex].episode_id
    }
    return result
  }

