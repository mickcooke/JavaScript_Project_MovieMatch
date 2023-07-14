import React, {useState, useEffect} from 'react';
import DirectorList from "../components/directorList";
import Header from "../components/header"
import Footer from "../components/footer";
import tempMovies from "../components/tempMovies";



const MovieContainer = () => {

const [movies, setMovies] = useState([]);

const getMovies = () => {setMovies(tempMovies)};

useEffect(() => {
  getMovies()
},[])


  return(
    <>
      <Header/>
      <DirectorList movies={movies}/>
      <Footer/>
    </>
  )
}

export default MovieContainer;