import React, { useState } from 'react';
import './TeamCard.css';

const TeamCard = ({ portrait, name, position, description }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className={`team-card ${showDetails ? 'expanded' : ''}`}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
            onClick={() => setShowDetails(!showDetails)}
        >
            <img src={portrait} alt={`${name}`} className="portrait" />
            <h3 className="name">{name}</h3>
            <p className="position">{position}</p>

            {showDetails && <p className="description">{description}</p>}
        </div>
    );
};

export default TeamCard;
