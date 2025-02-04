import React from 'react';
import Guide from "./Guide";
import {HashLink} from "react-router-hash-link";
import illust from '../assets/hero_img.webp'

const Hero = () => {
    return (
        <div className={'Hero'}>
            <div className={'wrapper'}>
                <div className="Text">
                    <h1>
                        zyrka
                    </h1>
                    <p>
                        Automotive Lot Management
                    </p>
                    <div className={'button-wrapper'}>
                        <HashLink smooth to={'/#contact-buttons'} >
                            <button className={'prim-button'} color={'white'}>
                                Get Started
                            </button>
                        </HashLink>
                        <HashLink smooth to={'/#guide'}>
                            <button className={'button-13'}>
                            How It Works
                            </button>
                        </HashLink>
                    </div>
                </div>
                <img src={illust} alt="" className={'heroPic'}/>
            </div>
            <div id={'guide'}>

            </div>
            <Guide/>
        </div>
    );
};

export default Hero;