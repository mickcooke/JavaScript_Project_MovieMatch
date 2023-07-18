import {Link} from 'react-router-dom';
import FavouritesHeart from "./favouritesHeart";

const MovieByActor = ({movie, toggleFavourites}) => {


  return (
    <>
    <div className='Item-box'>
       <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} className='img'/></Link>
      <div className='description-box'>
          <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>
      </div>
      <FavouritesHeart movie={movie} toggleFavourites={toggleFavourites}/>
    </div>
    </>
  )
}

export default MovieByActor;