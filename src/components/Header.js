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
                    <p>
                            <Link to={'/guide'}>
                                How Zyrka Works
                            </Link>
                    </p>
                    <p>
                            <Link to={'/contact'}>
                                Contact
                            </Link>
                    </p>
                    <p>
                            <Link to={'/info'}>
                                FAQ
                            </Link>
                    </p>
                    <p>
                            <Link to={'/info'}>
                                About Us
                            </Link>
                    </p>
                    <p className={'special'}>
                            <Link to={'/sign-in'} className={'special-link'}>
                                Sign In
                            </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;