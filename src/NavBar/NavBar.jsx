import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return ( 
        <>
        <nav className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dogs">Dogs</NavLink>
            <NavLink to="/cart">Check out</NavLink>
        </nav>
        </>
     );
}
 
export default NavBar;