import React, { useState } from 'react';

function AboutCard({ title, description, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="card-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        {icon && <img src={icon} alt="icon" />}
      </div>
      {isOpen && (
        <div className="card-body">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default AboutCard;
