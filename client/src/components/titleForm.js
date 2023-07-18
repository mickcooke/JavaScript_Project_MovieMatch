import React, {useState} from 'react';

const TitleForm = ({searchByTitle, movies}) => {

const[text, setText] = useState("")

const handleText = (event) => {
  setText(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  searchByTitle(text);
}

const handleRandomTitle = () => {

  const titles = movies.map((movie) => {
    return (movie.Title)
  })
  const randomTitle = titles[Math.floor(Math.random() * titles.length)]
  searchByTitle(randomTitle)
}


  return(
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={handleText}/>
        <input type="submit"/>
    </form>
    <button onClick={handleRandomTitle}>Random Title</button>
    </div>
    </>
  )
}

export default TitleForm;