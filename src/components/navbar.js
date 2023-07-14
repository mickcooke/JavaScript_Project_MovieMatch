import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <ul>
        <Link to={'/'}>Director</Link>
        <Link to={'/'}>Actor</Link>
        <Link to={'/'}>Title</Link>


    </ul>
  )
}

export default Navbar;