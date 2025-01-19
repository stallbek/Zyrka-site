import React from 'react';
import style from './Info.css';
import TeamCard from "../components/TeamCard";
import nath from '../assets/nathan.jpg'
import alex from '../assets/alex.JPG'
import stalbek from '../assets/stalbek_portrait.jpg'
import hamza from '../assets/hamza.png'
import Slider from "../components/Slider";

const Info = () => {

    return (
        <div className={'info-wrapper'}>
            <div className={'black'}>
                <h2>
                    Our Story
                </h2>
            </div>
            <div className={'work'}>
                <div className={'white'}>
                    <div className={'intro'}>
                        <p>
                            &emsp; &emsp;
                            My parents often joked about my knack for selling things, from convincing them to let me
                            build a computer to starting small side businesses like racquet stringing. Little did I know
                            those moments would lead to something bigger.
                        </p>
                        <p>
                            &emsp; &emsp;
                            On a long car ride home from a tennis tournament, I joked about selling cars for the summer.
                            To my surprise, my mom said, “Do it.” Fifteen minutes after getting home, I polished and
                            sent out my resume. By the next day, I was selling cars.
                        </p>
                        <p>
                            &emsp; &emsp;
                            While working in sales, I found it took forever to find the cars my clients wanted—they were
                            often blocked, far away, or on another lot entirely. This inefficiency wasted time,
                            frustrated customers, and cost salespeople and the dealership potential sales. Determined to
                            fix the problem, I teamed up with my co-founder, Alex.
                        </p>
                        <p>
                            &emsp; &emsp;
                            We built Zyrka, a software platform that lets dealerships know where their cars are 24/7. By
                            streamlining lot management, Zyrka saves time, recovers lost sales opportunities, and helps
                            dealerships increase sales by focusing on their customers.
                        </p>
                        <p>
                            &emsp; &emsp;
                            At Zyrka, we’re on a mission to transform dealership operations and set a new standard for
                            efficiency, and we’re just getting started.
                        </p>
                    </div>
                </div>

                <div>
                    <Slider/>
                </div>

                <div>
                    <div className={'black'}>
                        <h2>
                            Our Team
                        </h2>
                    </div>
                    <div>
                        <div className="team-container">
                            <TeamCard
                                portrait={nath}
                                name={'Nathan Rothschild'}
                                position={'CEO'}
                            />
                            <TeamCard
                                portrait={alex}
                                name={'Alex Zhou'}
                                position={'CTO'}
                            />
                            <TeamCard
                                portrait={hamza}
                                name={'Hamza'}
                                position={'Operations'}
                            />
                            <TeamCard
                                portrait={stalbek}
                                name={'Stalbek Ulanbek u.'}
                                position={'Web Development'}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;