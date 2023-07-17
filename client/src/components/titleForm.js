import React, {useState} from 'react';

const TitleForm = ({searchByTitle}) => {

const[text, setText] = useState("")

const handleText = (event) => {
  setText(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  searchByTitle(text);
}


  return(
    <>
    <div className='App'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={handleText}/>
        <input type="submit"/>
    </form>
    </div>
    </>
  )
}

export default TitleForm;