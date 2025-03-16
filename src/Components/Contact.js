import React from 'react';
import './Contact.css'; // Importing the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 8956051810</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:waghshivam322@gmail.com">divyawagh1112@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Sambhajinagar, India</span>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/divya-wagh-479979322/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/Divyawagh78/Frontend" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/divya-wagh-479979322/" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Divyawagh78/Frontend" className="social-link"><i className="fab fa-github"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
