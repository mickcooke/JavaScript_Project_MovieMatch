import Navbar from "./navbar";
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <div className="Header">

      <div className="heart">
      <Link to={'/favourites'}><img src={require("../images/Heart1.png")}/></Link>
      </div>
      <div className="title">
         <p className="title-text">moviematch</p>
      </div>
        
         
        
         <Navbar/>
    </div>
  )
}
export default Header;