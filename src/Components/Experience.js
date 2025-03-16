import React from 'react';
import './Experience.css'; // Importing the CSS file

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Your Current Company",
      period: "2023 - Present",
      description: [
        "Developed and maintained responsive web applications using React.js and modern JavaScript",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Improved application performance and user experience"
      ],
      skills: ["React", "JavaScript", "Node.js", "REST APIs", "Git"]
    },
    {
      title: "Intern",
      company: "Previous Company",
      period: "2023",
      description: [
        "Assisted in developing front-end features using React.js",
        "Participated in code reviews and team meetings",
        "Learned and implemented best practices in web development",
        "Contributed to improving the user interface of various projects"
      ],
      skills: ["React", "HTML", "CSS", "JavaScript", "Version Control"]
    }
  ];

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h2 className="job-title">{exp.title}</h2>
              <span className="company-name">{exp.company}</span>
              <span className="period">{exp.period}</span>
            </div>
            <div className="experience-content">
              <ul className="responsibilities">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="skills-container">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
