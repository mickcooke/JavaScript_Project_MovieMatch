import MovieByActor from "./movieByActor";
import ActorForm from "./actorForm";

const ActorList = ({movies, searchByActor}) => {

    const listItems = movies.map((movie) => {
        return (
            <MovieByActor movie={movie} key={movie.imdbID}/>
        )
    })

    return (
        <>
        <ActorForm searchByActor={searchByActor}/>
        <div className="App">
        <h2>Search by Actor</h2>
        </div>
        <div className="Item-container">
            {listItems}
        </div>
        </>
    )
}

export default ActorList;