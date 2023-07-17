const baseURL = 'http://localhost:9000/favourites';

export const getFavourites = () => {
  return fetch(baseURL)
  .then(response => response.json());
}

export const postFavourite= (movie) => {
  return fetch(baseURL, {
    method:'POST',
    body: JSON.stringify(movie),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json());
}

export const deleteFavourite= (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
  
}