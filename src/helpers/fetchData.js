export const fetchData = async (url) => {
  const response = await fetch(url);
  
  if (response.status >= 300) {
    return 'Error: Cannot fetch your data';
  } else {
    return await response.json();
  
  }
}