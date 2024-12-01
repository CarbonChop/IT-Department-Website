import Reaction from 'react';
import './ProgramCard.css';

function ProgramCard({ title, image}) {
    return (
        <div className="program-card">
            <img src={image} alt={title} className="program-card-image" />
            <div className="program-card-content">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default ProgramCard;