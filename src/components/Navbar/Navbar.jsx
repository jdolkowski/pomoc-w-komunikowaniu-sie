import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
    <nav className="app__navbar">
        <div className="app_navbar-logo">
            <img src={images.logo_fundacji} alt="logo_fundacji" />
        </div>
        <ul className="app__navbar-links">
            <li className="p_opensans">
                <a href="#home">Główna Strona</a>
            </li>
            <li className="p_opensans">
                <a href="#about">O nas</a>
            </li>
            <li className="p_opensans">
                <a href="#contcat">Contcat</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;