import React from 'react';
import './OverviewSection.css';

function OverviewSection({ title, mission_title, content1, content2, mission_content, mission_content2 }) {
    return (
        <>
            <section className="department-overview">
                <h1>{title}</h1>
                <p>{content1}</p>
                <p>{content2}</p>
            </section>
            <section className="mission">
                <h1>{mission_title}</h1>
                <p>{mission_content}</p>
                <p>{mission_content2}</p>
            </section>
        </>
    );
}

export default OverviewSection;