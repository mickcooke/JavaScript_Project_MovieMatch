const MovieDetail = ({movie}) => {

    const link = `https://www.imdb.com/title/${movie.imdbID}`;

  return(
    <>
        <img src={movie.Poster}/>
        <h2>{movie.Title}</h2>
        <h3>{movie.Director}</h3>
        <h3>{movie.Year}</h3>
        <h4>{movie.Actors}</h4>
        <p>{movie.Plot}</p>
        <h5>{movie.Ratings[1].Value}</h5>
        <a href={link}>IMDB link</a>
    </>
  )
}

return MovieDetail;