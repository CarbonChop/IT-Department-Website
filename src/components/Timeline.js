import React from 'react';
import './Timeline.css'; 

function Timeline() {
  const milestones = [
    { year: "2005", title: "Department Established", description: "The IT Department was formed to meet the growing demand for technology professionals." },
    { year: "2010", title: "First Graduating Class", description: "Celebrated the graduation of 50+ students with a degree specialized for IT." },
    { year: "2015", title: "Cybersecurity Program Launched", description: "Introduced the first cybersecurity-focused program to address rising security challenges." },
    { year: "2018", title: "State-of-the-Art Labs Renovated", description: "Upgraded facilities with cutting-edge technology for hands-on learning." },
    { year: "2022", title: "AI and Data Analytics Tracks Introduced", description: "Expanded curriculum to include advanced topics like AI and data analytics." },
  ];

  return (
    <div className="timeline-container">
      {milestones.map((milestone, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{milestone.year}</div>
          <div className="timeline-content">
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
