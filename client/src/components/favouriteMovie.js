import {Link} from 'react-router-dom';
import FavouritesHeart from "./favouritesHeart";

const FavouriteMovie = ({movie, toggleFavourites}) => {


    return(
      <>
      <div className='Item-box'>
      <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} className='img'/></Link>
      <div className='description-box'>
      <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>
      <FavouritesHeart movie={movie} toggleFavourites={toggleFavourites}/>
      </div>
      </div>
  
      </>
    )
  }

  export default FavouriteMovie;