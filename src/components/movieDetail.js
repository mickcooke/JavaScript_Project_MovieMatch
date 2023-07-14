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
    <div className='margin-left'>
      <div className='Detail-container'>

        <div className='Detail-box'>
          <img className='poster' src={selectedMovie.Poster}/>
        </div>
        <div className='Detail-box'>
          <h2>{selectedMovie.Title}</h2>
          <h3><b>Director:</b>  {selectedMovie.Director}</h3>
          <h3>Released: {selectedMovie.Year}</h3>
          <p><b>Starring:</b> {selectedMovie.Actors}</p>
          <p><b>Plot: </b>{selectedMovie.Plot}</p>
          <p><b>Rotten Tomatoes Rating:</b> {selectedMovie.Ratings[1].Value}</p>
          <a href={link}>IMDB link</a>
        </div>
      </div>
      </div>
    </>
  )
}

export default MovieDetail;