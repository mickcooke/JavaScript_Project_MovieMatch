import React, {useState} from 'react';

const ActorForm = ({searchByActor, movies}) => {

const[text, setText] = useState("")

const handleText = (event) => {
  setText(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  searchByActor(text);
}

const handleRandomActor = () => {

  const actors = movies.map((movie) => {
    return (movie.Actors)
  })
  const randomActor = actors[Math.floor(Math.random() * actors.length)]
  searchByActor(randomActor)
}


  return (
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Actor" onChange={handleText}/>
        <input type="submit"/>
    </form>
  

    </div>
    </>
  )
}

export default ActorForm;