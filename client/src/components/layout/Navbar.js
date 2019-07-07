import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <span className="navbar-brand.mb-0.h1.mx-auto">CocoApp</span>

            <div className="icons">
                <ul className="nav">
                    <li><a href="/about">About</a></li>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/match">Match</a></li>
                </ul>
            </div>

        </nav>
    );
    ;
}

export default Navbar;
