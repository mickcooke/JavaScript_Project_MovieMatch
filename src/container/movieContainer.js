import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DirectorList from "../components/directorList";
import Header from "../components/header"
import Footer from "../components/footer";
import tempMovies from "../components/tempMovies";
import MovieDetail from "../components/movieDetail";



const MovieContainer = () => {

const [movies, setMovies] = useState([]);
const [filteredMovies, setFilteredMovies] = useState([]);


const getMovies = () => {setMovies(tempMovies)};
const getFilteredMovies = () => {
  setFilteredMovies(tempMovies)
}

useEffect(() => {
  getMovies()
  getFilteredMovies()
},[])

const newSearchList = []


const searchByDirector = (text) => {
  const searchList = movies.filter((movie) => {
    return(movie.Director.toLowerCase().includes(text.toLowerCase()))
  })
  setFilteredMovies(searchList);
}


  return(
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<DirectorList movies={filteredMovies} searchByDirector={searchByDirector}/>}/>
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />}/>


      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default MovieContainer;