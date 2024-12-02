import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

function ContactPage() {
    return (
        <>
            <Navbar />
            <section className="contact-page">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p><strong>Central Campus Address:</strong> Building 13, 3501 Davie Road, Davie, FL 33314</p>
                <p><strong>North Campus Address:</strong> Building 48, 1000 Coconut Creek Blvd., Coconut Creek, FL 33066</p>
                <p><strong>Central Campus Phone:</strong> <a href="tel:9542016723">954-201-6723</a></p>
                <p><strong>Central Campus Phone:</strong> <a href="tel:9542012324">954-201-2324</a></p>
                <p><strong>Email:</strong> <a href="mailto:computer-science@broward.edu">computer-science@broward.edu</a></p>
            </div>
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Your First Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Your Last Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Your Email Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ContactPage;