import React from 'react';
import Navbar from '../components/Navbar';
import OverviewSection from '../components/OverviewSection';
import CallToAction from '../components/CTA';
import FeaturedPrograms from '../components/FeaturedPrograms';
import Footer from '../components/Footer';
import './HomePage.css';

function HomePage() {
    return (
        <>
        <Navbar />
        <OverviewSection
            title="Welcome to the Broward College IT Department"
            content1="The Broward College IT Department is commited to fostering innovation and excellence. We aim to equip students with the skills and knowledge required to succeed in their chosen career path."
            content2="Our programs are designed with practical application in mind, ensuring that graduates are prepared the moment they finish their degree. From cybersecurity to data analytics to web development and networking, we provide students with the foundation they need to succeed."
            mission_title="Mission"
            mission_content="Our mission is to empower students to excel in the ever-evolving field of information technology. Through hands-on learning, industry-relevant curricula, and dedicated faculty, we strive to cultivate a passion for problem-solving, innovation, and lifelong learning."
            mission_content2="We are committed to creating a supportive and inclusive environment that inspires students to achieve their goals and contribute meaningfully to the IT industry and community."
            buttonText="Learn more"
            buttonLink="/about"
        />
        <FeaturedPrograms />
        <CallToAction />
        <Footer />
        </>
    );
}

export default HomePage;