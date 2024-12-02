import React from 'react';
import './AboutFaculty.css';

function AboutFaculty() {
  const facultyList = [
    { name: "Dr. Jane Doe", position: "Professor of AI", photo: "/images/jane doe.jpg" },
    { name: "Dr. John Smith", position: "Professor of Networking", photo: "/images/john smith.jpg" },
    { name: "Dr. Sarah Lee", position: "Professor of Data Analytics/AI", photo: "/images/sarah lee.jpg" },
    { name: "Dr. Robert Johnson", position: "Professor of Project Management", photo: "/images/robert johnson.jpg" },
    { name: "Dr. Robin Gant", position: "Professor of Cyber Security", photo: "/images/robin gant.jpg" },
    { name: "Dr. Wendy Huang", position: "Professor of Software/Web Development", photo: "/images/wendy huang.jpg" }
  ];

  return (
    <section className="faculty-section">
      <div className="faculty-grid">
        {facultyList.map((member, index) => (
          <div key={index} className="faculty-card">
            <a href={member.link}>
              <img src={member.photo} alt={`${member.name}`} className="faculty-photo" />
            </a>
            <div className="faculty-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutFaculty;
