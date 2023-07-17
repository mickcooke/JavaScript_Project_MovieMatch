import React, {useState} from 'react';

const DirectorForm = ({searchByDirector}) => {

const[text, setText] = useState("")

const handleText = (event) => {
  setText(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  searchByDirector(text);
}


  return(
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Director" onChange={handleText}/>
        <input type="submit"/>
    </form>
    </div>
    </>
  )
}

export default DirectorForm;