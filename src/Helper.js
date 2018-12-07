import React from 'react';

class Helper {
  constructor(givenData) {
    this.data = givenData
  }


}

export const helper = (films) => {
  const randomIndex = Math.floor(Math.random() * 8);
   const result = {
       crawl: films.results[randomIndex].opening_crawl,
       title: films.results[randomIndex].title,
       episode: films.results[randomIndex].episode_id
   }
   return result
 }