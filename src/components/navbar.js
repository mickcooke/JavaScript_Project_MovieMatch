import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <>
    <div className='Nav-bar'>
      <span>
        <Link to={'/'}><p className='Nav-text'>Actor</p></Link>
      </span>
      <span>
        <Link to={'/'}><p className='Nav-text'>Director</p></Link>
      </span>
      
      <span>
        <Link to={'/title/'}><p className='Nav-text'>Title</p></Link>
      </span>
    </div>
    
    </>
    
    
  )
}

export default Navbar;