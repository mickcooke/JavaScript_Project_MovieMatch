import MovieByDirector from "./movieByDirector";

import DirectorForm from "../components/directorForm";



const DirectorList = ({movies, searchByDirector, addToFavourites}) => {

    const listItems = movies.map((movie) => {
      return(
        <MovieByDirector movie={movie} key={movie.imdbID} addToFavourites={addToFavourites}/>
      )
    })

  return(
    <>
    <DirectorForm searchByDirector={searchByDirector}/>
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