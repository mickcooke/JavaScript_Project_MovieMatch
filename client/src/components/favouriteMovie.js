import {Link} from 'react-router-dom';

const FavouriteMovie = ({movie, toggleFavourites}) => {

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
      <div className='delete-heart'><img onClick={handleClick} src={require("../images/HeartBroken.png")}/></div>
      </div>
      </div>
  
      </>
    )
  }

  export default FavouriteMovie;