import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="profile-image">
          <img src={profileImage} alt="Divya" />
        </div>
        <h1>Hello, I'm <span className="highlight">Divya</span></h1>
        <h2>Full Stack Developer</h2>
        <p>I specialize in creating robust web applications and responsive user interfaces with modern technologies.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="cta-button primary">View My Work</Link>
          <Link to="/contact" className="cta-button secondary">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 