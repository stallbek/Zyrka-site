import React from 'react';
import style from './Info.css';
import TeamCard from "../components/TeamCard";
import nath from '../assets/nathan.jpg'
import alex from '../assets/alex.JPG'
import stalbek from '../assets/stalbek_portrait.jpg'
import hamza from '../assets/hamza.png'

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
                            Once upon a time, in a small village nestled between rolling green hills, there was a
                            mysterious tree. The villagers whispered tales of its magical powers, claiming it could
                            grant a single wish to those who dared to climb it. One day, a curious boy named Luka
                            decided to test the legend. He scaled the towering tree, heart pounding with anticipation.
                            At the top, he found a shimmering golden leaf. Luka made his wish silently. To his
                            astonishment, the village began to glow with vibrant colors, transforming into a place of
                            endless joy and prosperity. The tree had worked its magic.Once upon a time, in a small
                            village nestled between rolling green hills, there was a
                            mysterious tree. The villagers whispered tales of its magical powers, claiming it could
                            grant a single wish to those who dared to climb it. One day, a curious boy named Luka
                            decided to test the legend. He scaled the towering tree, heart pounding with anticipation.
                            At the top, he found a shimmering golden leaf. Luka made his wish silently. To his
                            astonishment, the village began to glow with vibrant colors, transforming into a place of
                            endless joy and prosperity. The tree had worked its magic.
                        </p>
                    </div>
                </div>
                <div>
                    <div className={'black'}>
                        <h2>
                            Team
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
                                portrait={stalbek}
                                name={'Stalbek Ulanbek u.'}
                                position={'SDE'}
                            />
                            <TeamCard
                                portrait={hamza}
                                name={'Hamza'}
                                position={'Operation'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;