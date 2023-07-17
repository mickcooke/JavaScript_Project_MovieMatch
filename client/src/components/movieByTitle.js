import {Link} from 'react-router-dom';

const MovieByTitle = ({movie, addToFavourites, favouriteMovies}) => {

  const handleClick = () => {
    console.log(movie)
    addToFavourites(movie)
  }

  const movieInFavourites = () => {
    return (favouriteMovies.includes(movie))
  }

  return(
    <>
    <div className='Item-box'>
      <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} className='img'/></Link>
      <div className='description-box'>
        <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>
      </div>
      <div className='zoom'>
        { movieInFavourites() ? <img onClick={handleClick} src={require("../images/HeartSolidWhite.png")}/> : <img onClick={handleClick} src={require("../images/Heart1.png")}/> }
          
      </div>
    </div>

    </>
  )
}

export default MovieByTitle;