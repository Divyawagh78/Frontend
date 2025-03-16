import React from 'react';
import './Education.css'; // Importing the CSS file

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="education-grid">
        <div className="education-card">
          <h2 className="degree-title">Bachelor of Science </h2>
          <p className="institution">Shivaji College, Kannad</p>
          <p className="year">2023</p>
        </div>

        <div className="education-card">
          <h2 className="degree-title">HSC</h2>
          <p className="institution">Kanya vidyalaya, kannad</p>
          <p className="year">2020</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
