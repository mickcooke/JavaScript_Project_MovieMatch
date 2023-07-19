import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DirectorList from "../components/directorList";
import HomeList from "../components/homeList";
import { getMovies, updateMovie } from '../movieService';
import ActorList from '../components/actorList';

import TitleList from '../components/titleList';

import Header from "../components/header"
import Footer from "../components/footer";
// import tempMovies from "../components/tempMovies";
import MovieDetail from "../components/movieDetail";
import { getFavourites, postFavourite, deleteFavourite } from '../favouritesService';
import FavouriteList from '../components/favouriteList';



const MovieContainer = () => {

const [movies, setMovies] = useState([]);
const [filteredMoviesByDirector, setFilteredMoviesByDirector] = useState([]);
const [filteredMoviesByTitle, setFilteredMoviesByTitle] = useState([]);
const [filteredMoviesByActor, setFilteredMoviesByActor] = useState([]);
const [favouriteMovies, setFavouriteMovies] = useState([]);
const [homeMovies, setHomeMovies] = useState([]);






useEffect(() => {
 fetchMyData()
  
},[ ])

const shuffle = (movies) => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  setHomeMovies(shuffled);
  setFilteredMoviesByActor(shuffled)
  setFilteredMoviesByDirector(shuffled)
  setFilteredMoviesByTitle(shuffled)

}

const fetchMyData = () => {
getMovies().then((movies) => {
  setMovies(movies)

  const currentFavourites = movies.filter((movie) => {
    return movie.Favourites === true
  })
  setFavouriteMovies(currentFavourites);
  shuffle(movies)
})
// getFavourites().then((favourites) => {
//   setFavouriteMovies(favourites) 
}
 



const toggleFavourites = (movie) => {
  //STATE
  //make a copy of movies
  const moviesCopy = [...movies]
  const index = moviesCopy.findIndex(film => {return film._id === movie._id})
  if(index !== -1) {
    moviesCopy[index].Favourites = !moviesCopy[index].Favourites;
  }
  setMovies(moviesCopy);
  //find the movie in movies where movieID === movieID
  // remove foundMovie from moviesCopy
  //amend movie to true
  //set movies to new list

  //call update method in movies services and pass in the _id as a parameter and the new movie object (without the _id)
  updateMovie(movie)
  
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
  console.log({searchList})
  setFilteredMoviesByTitle(searchList);
}


  return(
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<DirectorList movies={filteredMoviesByDirector} searchByDirector={searchByDirector} toggleFavourites={toggleFavourites} allMovies={movies} shuffle={shuffle}/>}/>

        <Route path="/home" element={<HomeList movies={homeMovies} toggleFavourites={toggleFavourites}/>}/>

        <Route path="/actor" element={<ActorList movies={filteredMoviesByActor} searchByActor={searchByActor} toggleFavourites={toggleFavourites} allMovies={movies} shuffle={shuffle}/>}/>

        <Route path="/title/" element={<TitleList movies={filteredMoviesByTitle} searchByTitle={searchByTitle} toggleFavourites={toggleFavourites} favouriteMovies={favouriteMovies} allMovies={movies} shuffle={shuffle}/>}/>

        <Route path="/movie/:id" element={<MovieDetail movies={movies} searchByDirector={searchByDirector} toggleFavourites={toggleFavourites} />}/>

        <Route path="/favourites/" element={<FavouriteList movies={movies} toggleFavourites={toggleFavourites}/>}/>



      </Routes>
      </Router>
      {/* <Footer/> */}
    </>
  )
}

export default MovieContainer;