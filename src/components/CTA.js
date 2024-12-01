import React from 'react';
import './CTA.css';

function CallToAction() {
    return (
        <section className="cta-section">
            <h2 className="cta-title">Take the next step</h2>
            <div className="cta-buttons">
                <button className="cta-button info-button">Request Information</button>
                <button className="cta-button apply-button">Apply Now</button>
            </div>
        </section>
    );
}

export default CallToAction;