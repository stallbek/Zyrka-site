import React from 'react';
import './TeamCard.css';

const TeamCard = ({ portrait, name, position }) => {
    return (
        <div className="team-card">
            <img src={portrait} alt={`${name}`} className="portrait" />
            <h3 className="name">{name}</h3>
            <p className="position">{position}</p>
        </div>
    );
};

export default TeamCard;
