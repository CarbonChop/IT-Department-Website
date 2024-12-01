import React, { useState } from 'react';

function ProgramAccordion({ program }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="program-card">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{program.title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p><strong>Program Overview:</strong> {program.overview}</p>
          <p><strong>Curriculum:</strong> {program.curriculum}</p>
          <p><strong>Admission Requirements:</strong> {program.admission}</p>
          <p><strong>Career Prospects:</strong> {program.careerProspects}</p>
        </div>
      )}
    </div>
  );
}

export default ProgramAccordion;
