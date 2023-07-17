import {Link} from 'react-router-dom';

const FavouriteMovie = ({movie, deleteFavourite}) => {


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
  }

  export default FavouriteMovie;