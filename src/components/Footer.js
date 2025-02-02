import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import linked from '../assets/linked.png';
import facebook from '../assets/facebook.png';
import tweeter from '../assets/tweeter.png';
import instagram from '../assets/instagram.png';
import logo from '../assets/zyrka_CMJN_Logo.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Zyrka Logo"/>
                </div>
                <div className="footer-rights">
                    <p>Copyright © 2025 Zyrka, LLC. All rights reserved.</p>
                </div>
                <div className="footer-social">
                    <Link to="https://www.linkedin.com/company/zyrka-inventory-solutions/" target="_blank" rel="noopener noreferrer">
                        <img src={linked} alt="LinkedIn"/>
                    </Link>
                    <Link to="https://www.facebook.com/zyrkaIS/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook"/>
                    </Link>
                    <Link to="https://x.com/zyrkais" target="_blank" rel="noopener noreferrer">
                        <img src={tweeter} alt="Twitter"/>
                    </Link>
                    <Link to="https://www.instagram.com/zyrkais/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram"/>
                    </Link>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
