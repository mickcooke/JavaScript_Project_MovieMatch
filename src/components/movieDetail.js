import React from 'react';
import {useParams, Link} from 'react-router-dom';

const MovieDetail = ({movies, searchByDirector}) => {

    const {id} = useParams();


    const selectedMovie = movies.find((movie) => {
      return movie.imdbID === id
    })

    const bySameDirector = movies.filter((movie) => {
      return((movie.Director === selectedMovie.Director) && (movie.Title !== selectedMovie.Title))
    })
    const bySameDirectorSlice = bySameDirector.slice(0,2);

    const mightLikeDirectorList = bySameDirectorSlice.map((movie) => {
      return(
        <>
        <div className='Item-box'>
    <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} className='img'/></Link>
    <div className='description-box'>
    <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>
    </div>
    </div>

        </>
      )
    });


      const actorList = selectedMovie.Actors.split(",");
      const actor = actorList[0];


    const withSameActor = movies.filter((movie) => {
      const movieActorList = movie.Actors.split(",");
      return ((movieActorList.includes(actor)) && (movie.Title !== selectedMovie.Title) && !(bySameDirectorSlice.includes(movie)))
    });

    const withSameActorSlice = withSameActor.slice(0,2);

    const mightLikeActorList = withSameActorSlice.map((movie) => {
      return(
        <>
        <div className='Item-box'>
    <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} className='img'/></Link>
    <div className='description-box'>
    <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>
    </div>
    </div>

        </>
      )
    });



    const link = `https://www.imdb.com/title/${selectedMovie.imdbID}`;

    if(!selectedMovie){
        return null;
    }

  return(
    <>
      <div>
        <img src={selectedMovie.Poster}/>
        <h2>{selectedMovie.Title}</h2>
        <h3>{selectedMovie.Director}</h3>
        <h3>{selectedMovie.Year}</h3>
        <h4>{selectedMovie.Actors}</h4>
        <p>{selectedMovie.Plot}</p>
        <h5>{selectedMovie.Ratings[1].Value}</h5>
        <a href={link}>IMDB link</a>
      </div>
      <div>
        <h2>You might also like...</h2>
        {mightLikeDirectorList}
        {mightLikeActorList}
      </div>
    </>
  )
}

export default MovieDetail;