import {deleteFavourite} from '../favouritesService';
import FavouriteMovie from "../components/favouriteMovie";

const FavouriteList = ({movies, toggleFavourites}) => 

{

    const favouriteMovies = movies.filter((movie) => {
      return movie.Favourites === true;
    })

    const listItems = favouriteMovies.map((movie) => {
        return(
          <FavouriteMovie movie={movie} key={movie.imdbID} toggleFavourites={toggleFavourites}/>
        )
      })







    return (
    <>
        <div className="App">
    <h2>Favourites</h2>
    </div>
    <div className="Item-container">
    {listItems}
    </div>

    </>
    )
  
}

export default FavouriteList;