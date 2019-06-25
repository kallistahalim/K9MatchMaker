import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <span className="navbar-brand.mb-0.h1.mx-auto">CocoApp</span>

            <div class="icons">
                <ul class="nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Match</a></li>
                </ul>
            </div>

        </nav>
    );
    ;
}

export default Navbar;
