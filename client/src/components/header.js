import Navbar from "./navbar";
import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({favouriteMovies}) => {

const oneFavs = () => {
  return(favouriteMovies.length >= 1)
}

const threeFavs = () => {
  return(favouriteMovies.length >= 3)
}

const fiveFavs = () => {
  return(favouriteMovies.length >= 5)
}

const sevenFavs = () => {
  return(favouriteMovies.length >= 7)
}

const nineFavs = () => {
  return(favouriteMovies.length >= 9)
}

const elevenFavs = () => {
  return(favouriteMovies.length >= 11)
}

const thirteenFavs = () => {
  return(favouriteMovies.length >= 13)
}

const fifteenFavs = () => {
  return(favouriteMovies.length >= 15)
}

  return(
    <div className="Header">
      <div className="heart-container">
        <div className="heart">
          {fifteenFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartSolidWhite.png")}/></Link>
           : thirteenFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartAtThirteen.png")}/></Link>
           : elevenFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartAtEleven.png")}/></Link>
           : nineFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartAtNine.png")}/></Link>
           : sevenFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartAtSeven.png")}/></Link>
           : fiveFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartHalfFull.png")}/></Link>
           : threeFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartAtThree.png")}/></Link>
           : oneFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartAtOne.png")}/></Link>
          : <Link to={'/favourites'}><img src={require("../images/Heart1.png")}/></Link>
          }
      </div>
      </div>
      <div className="title">
        <div className="title-text-box">
         <Link to={'/home'}><p className="title-text">moviematch</p></Link>
         </div>
      </div>
        
         
        
         <Navbar/>
    </div>
  )
}
export default Header;