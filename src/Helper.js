
export const filmCleaner = (films) => {
  const randomIndex = Math.floor(Math.random() * 8);
   const result = {
       crawl: films.results[randomIndex].opening_crawl,
       title: films.results[randomIndex].title,
       episode: films.results[randomIndex].episode_id
   }
   return result
 }

 export const cardCleaner = (dataArray) => {
   console.log(Object.keys(dataArray[0]))
   //vehicles
   if(Object.keys(dataArray[0]).includes('model')) {
     console.log('vehicle')
   }
   //planets
   else if(Object.keys(dataArray[0]).includes('rotation_period')) {
     console.log('planet');
   }
   //people
   else if(Object.keys(dataArray[0]).includes('hair_color')) {
     console.log('person');
   } else {
     console.log('error in data cleaner');
   }
 }