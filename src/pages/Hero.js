import React from 'react';
import Header from "../components/Header";
import Style from './Hero.css'
import BtnStyle from '../components/Buttons.css'
import primbtn from '../components/PrimButtons.css'
import illustration from '../assets/hero.webp'
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className={'Hero'}>
            <div className={'wrapper'}>
                <div className="Text">
                    <h1>
                        zyrka
                    </h1>
                    <p>
                        Innovative Automotive Lot Management
                    </p>
                    <div className={'button-wrapper'}>
                        <Link to={'site'}>
                            <button className={'prim-button'} color={'white'}>
                                Get Started
                            </button>
                        </Link>
                        <Link to={'/guide'}>
                            <button className={'button-13'}>
                            How It Works
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={illustration} alt="" className={'heroPic'}/>
            </div>
            <div className={'platforms'}>
                <div className={'button-wrapper'}>
                    <button className={'button-13'}>
                        Web
                    </button>
                    <button className={'button-13'}>
                        iOS
                    </button>
                    <button className={'button-13'}>
                        Android
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Hero;