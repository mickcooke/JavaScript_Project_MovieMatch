import { Link } from "react-router-dom";
import FavouritesHeart from "./favouritesHeart";

const MovieByActor = ({ movie, toggleFavourites }) => {
  return (
    <>
      <div className="Item-box">
        <Link to={`/movie/${movie.imdbID}`}>
          <img src={movie.Poster} className="img" />
        </Link>
        <div className="description-box">
          <div className="heart-and-title">
            <div className="heart-lower">
              <FavouritesHeart
                movie={movie}
                toggleFavourites={toggleFavourites}
              />
            </div>
            <div>
              <Link to={`/movie/${movie.imdbID}`}>
                <h3 className="white-text">{movie.Title}</h3>
              </Link>
            </div>
          </div>
          <p className="text-raise">Featuring: {movie.Actors}</p>
        </div>
        <div />
      </div>
    </>
  );
};

export default MovieByActor;
