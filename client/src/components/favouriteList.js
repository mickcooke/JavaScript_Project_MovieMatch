import {deleteFavourite} from '../favouritesService';
import FavouriteMovie from "../components/favouriteMovie";

const FavouriteList = ({favouriteMovies}) => 

{

    const listItems = favouriteMovies.map((movie) => {
        return(
          <FavouriteMovie movie={movie} key={movie.imdbID} deleteFavourite={deleteFavourite}/>
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