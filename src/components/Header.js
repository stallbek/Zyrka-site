import React from 'react';
import logo from '../assets/zyrka_CMJN_Logo.png'
import Style from './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'all'}>
            <div className={'bar'}>
                <Link to={'/'}>
                    <div className={'logo'}>
                        <img src={logo} alt="" className={'logoPic'}/>
                    </div>
                </Link>
                <div className={'links'}>
                    <a href="">How Zyrka Works</a>
                    <a href="">Contacts</a>
                    <a href="">FAQ</a>
                    <a href="">About Us</a>
                    <a href="">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Header;