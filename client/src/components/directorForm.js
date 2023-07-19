import React, {useState} from 'react';

const DirectorForm = ({searchByDirector, movies, shuffle}) => {
const[text, setText] = useState("")

const handleText = (event) => {
  setText(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  searchByDirector(text);
}

const handleRandomDirector = () => {

  const directors = movies.map((movie) => {
    return (movie.Director)
  })
  const randomDirector = directors[Math.floor(Math.random() * directors.length)]
  searchByDirector(randomDirector)
}

const handleShuffle = () => {
  shuffle(movies)
}


  return(
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Director" onChange={handleText}/>
        <input type="submit"/>
    </form>
    <button onClick={handleRandomDirector}>Random Director</button>
    <button onClick={handleShuffle}>reset</button>
    </div>
    </>
  )
}

export default DirectorForm;