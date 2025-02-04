import React from 'react';
import './Guide.css'

import {Link} from "react-router-dom";

import FeaturePhoneSlider from "../components/FeaturePhoneSlider";

const Guide = () => {
    return (
        <div id={'guide'}>
            <div className={'black'}>
                <h3>
                    Tired of wasting time running around your dealership?
                </h3>
            </div>

            <FeaturePhoneSlider/>
            <div className={'black'}>
                <h3>
                    Ready to modernize your workflow?
                </h3>
            </div>
            <div>
                <div className="contact-buttons" id="contact-buttons">

                    <Link to="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1nLOVIOwht3xmrc-tiwiEtRUVJPT8-RP96W538v4DC-spuzvVu9EPoa8xpWQQCZ016IBcqEPM9?gv=true" className="contact-button call-button" target={'_blank'}>
                        Schedule a call
                    </Link>

                    <a
                        href="mailto:info@zyrka.is"
                        className="contact-button email-button"
                    >
                        Email us
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Guide;