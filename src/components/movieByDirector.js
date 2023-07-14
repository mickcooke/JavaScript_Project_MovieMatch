import {Link} from 'react-router-dom';

const MovieByDirector = ({movie}) => {



  return(
    <>
    <h3>{movie.Title}</h3>
    <img src={movie.Poster}/>
    <Link to={`/movie/${movie.imdbID}`}>Link</Link>

    </>
  )
}

export default MovieByDirector;