import React from "react";
import { useParams, Link } from "react-router-dom";
import FavouritesHeart from "./favouritesHeart";

const MovieDetail = ({ movies, searchByDirector, toggleFavourites }) => {
  const { id } = useParams();

  const selectedMovie = movies.find((movie) => {
    return movie.imdbID === id;
  });

  const bySameDirector = movies.filter((movie) => {
    return (
      movie.Director === selectedMovie.Director &&
      movie.Title !== selectedMovie.Title
    );
  });
  const bySameDirectorSlice = bySameDirector.slice(0, 2);

  const mightLikeDirectorList = bySameDirectorSlice.map((movie) => {
    return (
      <>
        <div className="Ymal-box">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} className="Ymal-img" />
          </Link>
          <div className="Ymal-description-box">
            <Link to={`/movie/${movie.imdbID}`}>
              <p className="Ymal-text">{movie.Title}</p>
            </Link>
          </div>

        </div>
      </>
    );
  });

  const actorList = selectedMovie.Actors.split(",");
  const actor = actorList[0];

  const withSameActor = movies.filter((movie) => {
    const movieActorList = movie.Actors.split(",");
    return (
      movieActorList.includes(actor) &&
      movie.Title !== selectedMovie.Title &&
      !bySameDirectorSlice.includes(movie)
    );
  });

  const withSameActorSlice = withSameActor.slice(0, 2);

  const mightLikeActorList = withSameActorSlice.map((movie) => {
    return (
      <>
        <div className="Ymal-box">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} className="Ymal-img" />
          </Link>
          <div className="Ymal-description-box">
            <Link to={`/movie/${movie.imdbID}`}>
              <p className="Ymal-text">{movie.Title}</p>
            </Link>
          </div>
        </div>
      </>
    );
  });

  const link = `https://www.imdb.com/title/${selectedMovie.imdbID}`;

  if (!selectedMovie) {
    return null;
  }

  return (
    <>
      <div className="margin-left">
        <div className="Detail-container">
          <div className="Detail-box">
            <img className="poster" src={selectedMovie.Poster} />
          </div>
          <div className="Detail-box">
            <h2>{selectedMovie.Title}</h2>
            <h3>
              <b>Director:</b> {selectedMovie.Director}
            </h3>
            <h3>Released: {selectedMovie.Year}</h3>
            <p>
              <b>Starring:</b> {selectedMovie.Actors}
            </p>
            <p>
              <b>Plot: </b>
              {selectedMovie.Plot}
            </p>
            <p>
              <b>Rotten Tomatoes Rating:</b> {selectedMovie.Ratings[1].Value}
            </p>
            <div className="IMDB">
              <a
                target="blank"
                rel="noopener noreferrer"
                href={link}
                className="white-text"
              >
                IMDB link
              </a>
            </div>
            <br></br>
            <br></br>
            <FavouritesHeart
              movie={selectedMovie}
              toggleFavourites={toggleFavourites}
            />
            <br></br>
          </div>
          <div>
            <br></br>
            <br></br>

            <h2>You might also like...</h2>
            <div className="Ymal-detail-box">
              {mightLikeDirectorList}
              {mightLikeActorList}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
