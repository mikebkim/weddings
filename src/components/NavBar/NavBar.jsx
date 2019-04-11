import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (props) => {
    return (
        <nav>
            <ul className="NavBar">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Our Wedding</Link>
                </li>
                <li className="nav-item">
                    <Link to="/photos" className="nav-link">Photos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/registry" className="nav-link">Registry</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
