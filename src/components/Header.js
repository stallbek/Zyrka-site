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
                            <Link to={'/guide/#contact-buttons'}>
                                Contact
                            </Link>
                    </p>
                    <p>
                            <Link to={'/faq'}>
                                FAQ
                            </Link>
                    </p>
                    <p>
                            <Link to={'/about'}>
                                About Us
                            </Link>
                    </p>
                    <p className={'special'}>
                            <Link to={'https://app.zyrka.is/'} className={'special-link'} target={'_blank'}>
                                Sign In
                            </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;