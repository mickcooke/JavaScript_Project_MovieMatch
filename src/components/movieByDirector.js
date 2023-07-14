const MovieByDirector = ({movie}) => {


  return(
    <>
    <h3>{movie.Title}</h3>
    <img src={movie.Poster}/>

    </>
  )
}

export default MovieByDirector;