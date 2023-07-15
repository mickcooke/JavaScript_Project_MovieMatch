import MovieByDirector from "./movieByDirector";
import DirectorForm from "../components/directorForm";


const DirectorList = ({movies, searchByDirector}) => {

    const listItems = movies.map((movie) => {
      return(
        <MovieByDirector movie={movie} key={movie.imdbID}/>
      )
    })

  return(
    <>
    <DirectorForm searchByDirector={searchByDirector}/>
    <div className="App">
    </div>
    <div className="Item-container">
    {listItems}
    </div>
    </>
  )
}

export default DirectorList;