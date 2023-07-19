import Navbar from "./navbar";
import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({favouriteMovies}) => {

const fiveFavs = () => {
  return(favouriteMovies.length >= 5)
}

const tenFavs = () => {
  return(favouriteMovies.length >= 10)
}

  return(
    <div className="Header">
      <div className="heart-container">
        <div className="heart">
          {tenFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartSolidWhite.png")}/></Link>
           : fiveFavs()
           ? <Link to={'/favourites'}><img src={require("../images/HeartHalfFull.png")}/></Link>
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