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
    <h2>I am a list of movies by this Director</h2>
    </div>
    <div className="Item-container">
    {listItems}
    </div>
    </>
  )
}

export default DirectorList;