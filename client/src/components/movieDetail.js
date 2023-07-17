import React from 'react';
import {useParams, Link} from 'react-router-dom';



const MovieDetail = ({movies, searchByDirector, addToFavourites}) => {

    const {id} = useParams();


    const selectedMovie = movies.find((movie) => {
      return movie.imdbID === id
    })

    const handleClick = () => {
      console.log(selectedMovie)
      addToFavourites(selectedMovie)
    }

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
        <h2>You might also like...</h2>
        {mightLikeDirectorList}
        {mightLikeActorList}
      </div>

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
           <a target="blank" rel="noopener noreferrer" href={link}>IMDB link</a>
          
          <br></br>
          <br></br>
           <div>
        <h2>You might also like...</h2>
        {mightLikeDirectorList}
        {mightLikeActorList}
          </div>
          <div className='zoom'>
          <button><img onClick={handleClick} src={require("../images/Heart1.png")}/></button>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default MovieDetail;