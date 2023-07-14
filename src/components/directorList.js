import MovieByDirector from "./movieByDirector";
import DirectorForm from "../components/directorForm";


const DirectorList = ({movies}) => {

    const listItems = movies.map((movie) => {
      return(
        <MovieByDirector movie={movie} key={movie.imdbID}/>
      )
    })

  return(
    <>
    <DirectorForm/>
    <h2>I am a list of movies by this Director</h2>
    {listItems}
    </>
  )
}

export default DirectorList;