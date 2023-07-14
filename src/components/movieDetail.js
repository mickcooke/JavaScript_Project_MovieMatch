import React from 'react';
import {useParams} from 'react-router-dom';

const MovieDetail = ({movies}) => {

    const {id} = useParams();
    const selectedMovie = movies.find((movie) => {
      return movie.imdbID === id
    })

    const link = `https://www.imdb.com/title/${selectedMovie.imdbID}`;

    if(!selectedMovie){
        return null;
    }

  return(
    <>
        <img src={selectedMovie.Poster}/>
        <h2>{selectedMovie.Title}</h2>
        <h3>{selectedMovie.Director}</h3>
        <h3>{selectedMovie.Year}</h3>
        <h4>{selectedMovie.Actors}</h4>
        <p>{selectedMovie.Plot}</p>
        <h5>{selectedMovie.Ratings[1].Value}</h5>
        <a href={link}>IMDB link</a>
    </>
  )
}

export default MovieDetail;