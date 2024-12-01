import React from 'react';

function DisplayFaculty({ facultyData }) {  
  return (
    <section className="faculty">
        <h2 className="faculty-title">Meet our Faculty</h2>
        {facultyData.map((facultyMember, index) => (  
            <div key={index} className="faculty-row">
            <div className="faculty-photo">
                <img src={facultyMember.photo} alt={facultyMember.name} />
            </div>
            <div className="faculty-info">
                <h3>{facultyMember.name}</h3>
                <p><strong>Title:</strong> {facultyMember.position}</p>
                <p><strong>Department:</strong> {facultyMember.department}</p>
                <p><strong>Campus:</strong> {facultyMember.campus}</p>
                <p><strong>Teaching Credentials:</strong> {facultyMember.credentials}</p>
                <p><strong>Email:</strong> <a href={`mailto:${facultyMember.email}`}>{facultyMember.email}</a></p>
            </div>
            </div>
      ))}
    </section>
  );
}

export default DisplayFaculty;
