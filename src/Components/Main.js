import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import profileImage from '../assets/profile.jpg';  // Import the profile image

const Main = () => {
  return (
    <div className="main-container">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profileImage} alt="Shivam" className="profile-img" />
        </div>
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Divya</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I specialize in creating robust web applications and responsive user interfaces with modern technologies.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="cta-button primary">View My Work</Link>
            <Link to="/contact" className="cta-button secondary">Contact Me</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
