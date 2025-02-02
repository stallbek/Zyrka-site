import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/zyrka_CMJN_Logo.png';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <div className="all">
            <div className="bar">
                <Link to="/" onClick={handleLinkClick}>
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logoPic" />
                    </div>
                </Link>
                <div className="nav-container">
                    <div className="desktop-links">
                        <p>
                            <HashLink smooth to="/#guide" onClick={handleLinkClick}>How Zyrka Works</HashLink>
                        </p>
                        <p>
                            <HashLink smooth to="/#contact-buttons" onClick={handleLinkClick}>Contact</HashLink>
                        </p>
                        <p>
                            <HashLink smooth to="/about/#story" onClick={handleLinkClick}>About Us</HashLink>
                        </p>
                        <p className="special">
                            <Link
                                to="https://app.zyrka.is/"
                                className="special-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>


                    <div className="mobile-menu-icon" onClick={toggleMenu}>
                        <div className="bar-line"></div>
                        <div className="bar-line"></div>
                        <div className="bar-line"></div>
                    </div>
                </div>
            </div>


            {menuOpen && (
                <div className="mobile-menu">
                    <p>
                        <HashLink smooth to="/#guide" onClick={handleLinkClick}>How Zyrka Works</HashLink>
                    </p>
                    <p>
                        <HashLink smooth to="/#contact-buttons" onClick={handleLinkClick}>Contact</HashLink>
                    </p>
                    <p>
                        <HashLink smooth to="/about/#story" onClick={handleLinkClick}>About Us</HashLink>
                    </p>
                    <p className="special">
                        <Link
                            to="https://app.zyrka.is/"
                            className="special-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Header;
