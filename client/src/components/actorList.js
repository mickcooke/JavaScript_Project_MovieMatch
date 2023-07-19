import MovieByActor from "./movieByActor";
import ActorForm from "./actorForm";

const ActorList = ({movies, searchByActor, toggleFavourites}) => {
  // const shuffled = [...movies].sort(() => 0.5 - Math.random());

    const listItems = movies.map((movie) => {
        return (
            <MovieByActor movie={movie} key={movie.imdbID} toggleFavourites={toggleFavourites}/>
        )
    })

    const listIsPopulated = () => {
        return(movies.length > 0)
      }

    return (
        <>
        <ActorForm searchByActor={searchByActor}/>
        <div className="App">
        <h2>Search by Actor</h2>
        </div>
        <div className="Item-container">
        {listIsPopulated() ? <>{listItems}</> : <h2>No Results Found</h2>}
        </div>
        </>
    )
}

export default ActorList;