import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container footer-section">
      <div
        className="footer-left"
        data-animate="fade-right"
        style={{ '--animate-delay': '0.1s' }}
      >
        <h2 className="footer-title">LET'S WORK<br/>TOGETHER <span className="accent-text">+</span></h2>
        <p className="footer-desc">
          I am currently open to internship opportunities and collaborations. If you have a project in mind or would like to discuss potential opportunities, please feel free to reach out to me. I am eager to contribute my skills and learn from real-world experiences.
        </p>
        <div className="availability" style={{ marginTop: '2rem' }}>
          <span className="dot"></span> Available for Work
        </div>
      </div>

      <div
        className="footer-center"
        data-animate="fade-up"
        style={{ '--animate-delay': '0.15s' }}
      >
        <ul className="contact-list stagger">
          <li className="stagger-item">
            <span className="icon">✉</span>
            <a href="mailto:bunthearak05@gmail.com">bunthearak05@gmail.com</a>
          </li>
          <li className="stagger-item">
            <span className="icon">🌐</span>
            <a href="https://thearak.netlify.app/" target='_blank'>thearak.netlify.app</a>
          </li>
          <li className="stagger-item">
            <span className="icon">📞</span>
            <a href="tel:+6281234567890">+855 66 937 889</a>
          </li>
          <li className="stagger-item">
            <span className="icon">📍</span>
            <span>Phnom Penh, Cambodia</span>
          </li>
        </ul>
      </div>

      <div
        className="footer-right"
        data-animate="fade-left"
        style={{ '--animate-delay': '0.2s' }}
      >
        <div className="laptop-mockup">
          {/* Placeholder for the laptop image */}
          <div className="screen-content">
            <h4>
              WE DESIGN <br /> AND <br /> DEVELOP
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
