import Movie from "./movie"

const HomeList = ({movies}) => {
  const listItems = movies.map((movie) => {
    return(
        <Movie movie={movie} key={movie.imdbID}/>
    )
  })

  return(
    <>

<>
    <div className="App">
    </div>
    <div className="Item-container">
    {listItems}
    </div>
    </>
    </>
  )
}

export default HomeList