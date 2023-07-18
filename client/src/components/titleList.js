import MovieByTitle from "./movieByTitle";
import TitleForm from "../components/titleForm";



const TitleList = ({movies, searchByTitle, toggleFavourites, favouriteMovies}) => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());

    
  const listItems = shuffled.map((movie) => {
      
      return(
        <MovieByTitle movie={movie} key={movie.imdbID} toggleFavourites={toggleFavourites} favouriteMovies={favouriteMovies}/>
      )
    })

    const listIsPopulated = () => {
      return(movies.length > 0)
    }
        
      
    

  return(
    <>
    <TitleForm searchByTitle={searchByTitle}/>
    <div className="App">
    <h2>Search by Title</h2>
    </div>
    <div className="Item-container">

    {listIsPopulated() ? <>{listItems}</> : <h2>No Results Found</h2>}
    </div>
    </>
  )

  }
export default TitleList;