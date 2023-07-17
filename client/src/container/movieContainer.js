import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DirectorList from "../components/directorList";
import HomeList from "../components/homeList";

import ActorList from '../components/actorList';

import TitleList from '../components/titleList';

import Header from "../components/header"
import Footer from "../components/footer";
import tempMovies from "../components/tempMovies";
import MovieDetail from "../components/movieDetail";
import { getFavourites, postFavourite, deleteFavourite } from '../favouritesService';
import FavouriteList from '../components/favouriteList';



const MovieContainer = () => {

const [movies, setMovies] = useState([]);
const [filteredMoviesByDirector, setFilteredMoviesByDirector] = useState([]);
const [filteredMoviesByTitle, setFilteredMoviesByTitle] = useState([]);
const [filteredMoviesByActor, setFilteredMoviesByActor] = useState([]);
const [favouriteMovies, setFavouriteMovies] = useState([]);




const getMovies = () => {setMovies(tempMovies)};
const getFilteredMovies = () => {
  setFilteredMoviesByDirector(tempMovies);
  setFilteredMoviesByTitle(tempMovies);
  setFilteredMoviesByActor(tempMovies);
};

useEffect(() => {
  getMovies()
  getFilteredMovies()
  getFavourites().then((favourites) => {
    setFavouriteMovies(favourites)  
  })
},[])

const addToFavourites = (movie) => {
  postFavourite(movie)
  const updatedFavs = [...favouriteMovies, movie]
  setFavouriteMovies(updatedFavs)
}

const removeFavourite = (id) => {
  const favouritesToKeep = favouriteMovies.filter(movie => movie._id !== id)
  deleteFavourite(id)
  setFavouriteMovies(favouritesToKeep)
}

const searchByDirector = (text) => {
  const searchList = movies.filter((movie) => {
    return(movie.Director.toLowerCase().includes(text.toLowerCase()))
  })
  setFilteredMoviesByDirector(searchList);
}
const searchByActor = (text) => {
  const actorSearchList = movies.filter((movie) => {
    return(movie.Actors.toLowerCase().includes(text.toLowerCase()))
  })
  setFilteredMoviesByActor(actorSearchList);
}

const searchByTitle = (text) => {
  const searchList = movies.filter((movie) => {
    return(movie.Title.toLowerCase().includes(text.toLowerCase()))
  })
  setFilteredMoviesByTitle(searchList);
}


  return(
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<DirectorList movies={filteredMoviesByDirector} searchByDirector={searchByDirector}/>}/>
        <Route path="/home" element={<HomeList movies={movies}/>}/>


        <Route path="/actor" element={<ActorList movies={filteredMoviesByActor} searchByActor={searchByActor}/>}/>

        <Route path="/title/" element={<TitleList movies={filteredMoviesByTitle} searchByTitle={searchByTitle}/>}/>
        <Route path="/movie/:id" element={<MovieDetail movies={movies} searchByDirector={searchByDirector} addToFavourites={addToFavourites} />}/>

        <Route path="/favourites/" element={<FavouriteList favouriteMovies={favouriteMovies} removeFavourite={removeFavourite} />}/>



      </Routes>
      </Router>
      {/* <Footer/> */}
    </>
  )
}

export default MovieContainer;