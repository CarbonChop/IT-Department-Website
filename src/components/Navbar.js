import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Broward IT Department</h1>
            <div className="hamburger" onClick={toggleMenu}>
               <span className="hamburger-icon">&#9776;</span> {/* Hamburger icon */}
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;