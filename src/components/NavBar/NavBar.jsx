import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (props) => {
    return (
        <nav>
            <ul className="NavBar">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/photos" className="nav-link">Photos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
