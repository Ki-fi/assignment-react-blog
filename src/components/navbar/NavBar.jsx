import logo from "../../assets/logo-medium.png";
import {NavLink} from "react-router-dom";
import './NavBar.css';
import {useState} from "react";

function NavBar() {

    return (
    <>
            <nav className="navbar">
                <img src={logo} alt="Company logo"/>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Alle posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Nieuwe post maken</NavLink>
                    </li>
                </ul>
            </nav>
     </>
    )
}

export default NavBar;