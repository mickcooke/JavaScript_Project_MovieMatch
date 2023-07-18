import {Link} from 'react-router-dom';
import FavouritesHeart from "./favouritesHeart";

const MovieByActor = ({movie, toggleFavourites}) => {


  return (
    <>
    <div className='Item-box'>
       <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} className='img'/></Link>
      <div className='description-box'>
      <FavouritesHeart movie={movie} toggleFavourites={toggleFavourites}/>

          <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>
          <p>Featuring: {movie.Actors}</p>
      </div>
    </div>
    <br></br>
      <br></br>
    </>
  )
}

export default MovieByActor;