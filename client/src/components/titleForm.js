import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const TitleForm = ({searchByTitle, movies, shuffle}) => {

const[text, setText] = useState("")

const titles = movies.map((movie) => {
  return (movie.imdbID)
})
const randomTitle = titles[Math.floor(Math.random() * titles.length)]

const handleText = (event) => {
  setText(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  searchByTitle(text);
}

const handleShuffle = () => {
  shuffle(movies)
}

  return(
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" className='text-input-box' onChange={handleText}/>
        <input type="submit" className="submit"/>
    </form>
    <Link to={`/movie/${randomTitle}`}><button className="random">Random Title</button></Link>
    <button className='reset' onClick={handleShuffle}>Reset</button>
    </div>
    </>
  )
}

export default TitleForm;