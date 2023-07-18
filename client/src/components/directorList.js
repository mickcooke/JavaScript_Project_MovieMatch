import MovieByDirector from "./movieByDirector";

import DirectorForm from "../components/directorForm";



const DirectorList = ({movies, searchByDirector, toggleFavourites, allMovies}) => {

    const listItems = movies.map((movie) => {
      return(
        <MovieByDirector movie={movie} key={movie.imdbID} toggleFavourites={toggleFavourites}/>
      )
    })

  return(
    <>
    <DirectorForm searchByDirector={searchByDirector} movies={allMovies}/>
    <div className="App">
    <h2>Search by Director</h2>
    </div>
    <div className="Item-container">
    {listItems}
    </div>
    </>
  )
}

export default DirectorList;