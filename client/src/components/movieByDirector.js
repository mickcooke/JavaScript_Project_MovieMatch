import {Link} from 'react-router-dom';

const MovieByDirector = ({movie, toggleFavourites}) => {

  const handleClick = () => {
    console.log(movie)
    toggleFavourites(movie)
  }

  return(
    <>
    <div className='Item-box'>
      <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} className='img'/></Link>
      <div className='description-box'>
        <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}</h3></Link>
      </div>
      <div className='zoom'>
          <img onClick={handleClick} src={require("../images/Heart1.png")}/>
      </div>
    </div>

    </>
  )
}

export default MovieByDirector;