import {Link} from 'react-router-dom';

const MovieByDirector = ({movie}) => {



  return(
    <>
    <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>

    <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster}/></Link>

    </>
  )
}

export default MovieByDirector;