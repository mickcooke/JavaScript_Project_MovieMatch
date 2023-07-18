import Movie from "./movie"

const HomeList = ({movies}) => {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());

  const listItems = shuffled.map((movie) => {
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