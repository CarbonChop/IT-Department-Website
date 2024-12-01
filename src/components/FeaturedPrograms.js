import React from 'react';
import './FeaturedPrograms.css';
import ProgramCard from './ProgramCard';

function FeaturedPrograms() {
    return (
        <section className="featured-programs">
            <h2>Featured Programs</h2>
            <div className="programs-flex">
                <ProgramCard 
                    title="Web Development" 
                    image="/images/webdevelopment.png"
                />
                <ProgramCard 
                    title="Cyber Security" 
                    image="images/cybersecurity.png"
                />
                <ProgramCard 
                    title="Data Science" 
                    image="images/datascience.png"
                />           
            </div>
        </section>
    );
}

export default FeaturedPrograms;