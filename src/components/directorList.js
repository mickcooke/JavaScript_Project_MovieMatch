import MovieByDirector from "./movieByDirector";
import DirectorForm from "../components/directorForm";


const DirectorList = () => {
  return(
    <>
    <DirectorForm/>
    <h2>I am a list of movies by this Director</h2>
    <MovieByDirector/>
    </>
  )
}

export default DirectorList;