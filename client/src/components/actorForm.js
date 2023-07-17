import React, {useState} from 'react';

const ActorForm = ({searchByActor}) => {

const[text, setText] = useState("")

const handleText = (event) => {
  setText(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  searchByActor(text);
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