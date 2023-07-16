import Navbar from "./navbar";

const Header = () => {
  return(
    <div className="Header">

      <div className="heart">
        <img src={require("../images/Heart1.png")}/>
      </div>
      <div className="title">
         <p className="title-text">moviematch</p>
      </div>
        
         
        
         <Navbar/>
    </div>
  )
}
export default Header;