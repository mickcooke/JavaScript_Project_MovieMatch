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
        <div className="title-text-box">
         <Link to={'/home'}><p className="title-text">moviematch</p></Link>
         </div>
      </div>
        
         
        
         <Navbar/>
    </div>
  )
}
export default Header;