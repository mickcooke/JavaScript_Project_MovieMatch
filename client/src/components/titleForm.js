import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const TitleForm = ({searchByTitle, movies}) => {

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

// const handleRandomTitle = () => {



//   console.log({randomTitle})
//   searchByTitle(randomTitle)
// }


  return(
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={handleText}/>
        <input type="submit"/>
    </form>
    <Link to={`/movie/${randomTitle}`}><button>Random Title</button></Link>
    </div>
    </>
  )
}

export default TitleForm;