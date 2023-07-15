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
        </div>
        <div className="Item-container">
            {listItems}
        </div>
        </>
    )
}

export default ActorList;