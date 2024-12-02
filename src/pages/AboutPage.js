import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCard from '../components/AboutCard';
import Timeline from '../components/Timeline';
import AboutFaculty from '../components/AboutFaculty';
import './AboutPage.css';

function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="about-page">
                <section className="goals">
                    <h2 className="goals-title">Department Goals & Objectives</h2>
                    <div className="cards-container">
                        <AboutCard
                            title="Foster Innovation"
                            description="We strive to remain at the forefront of technological advancements by offering cutting-edge courses in AI, cybersecurity, and more."
                            icon="/images/innovation.png"
                        /> 
                        <AboutCard
                            title="Empower Students with Practical, Hands-On Experience"
                            description="Our students gain real-world experience through internships, collaborative projects, and state-of-the-art labs."
                            icon="/images/handson.png"
                        />
                        <AboutCard
                            title="Support Lifelong Learning and Professional Development"
                            description="In addition to traditional degree programs, we aim to foster an environment of lifelong learning, offering certifications, workshops, and continuing education opportunities that help our students stay ahead in their careers as the field of IT continues to evolve."
                            icon="/images/professionaldevelopment.png"
                        />
                        <AboutCard
                            title="Deliver a Robust Curriculum"
                            description="We offer a blend of theory and practical applications to equip students with essential IT skills."
                            icon="/images/curriculum.png"
                        />
                        <AboutCard
                            title="Enhance Collaboration with Industry Partners"
                            description="Our department strengthens ties with leading tech companies to provide mentorship, internships, and job placements."
                            icon="/images/collaboration.png"
                        />
                        <AboutCard
                            title="Invest in Faculty Development and Research"
                            description="The IT department recognizes the importance of investing in the professional growth of our faculty members. We aim to support their research efforts and keep them updated with the latest developments in the field. This allows them to provide cutting-edge education to students."
                            icon="/images/research.png"
                        />
                    </div>
                </section>
            </div>
            <section className="history">
                <h1 className="history-title">IT Department's History</h1>
                <Timeline />
            </section>
            <section className="faculty">
                <h1 className="faculty-title">Faculty and Staff</h1>
                <AboutFaculty />
            </section>
            <Footer />
        </>
    );
}

export default AboutPage;