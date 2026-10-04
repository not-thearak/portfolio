import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="container about-section">
      <div className="section-title">
        <h3>About Me</h3>
        <span className="accent-text" style={{ fontSize: '1.5rem' }}>
          +
        </span>
      </div>

      <div className="about-content">
        {/* Left Side: Image */}
        <div className="about-image-wrapper">
          {/* Using a placeholder image - replace with your own */}
          <img
            src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/776747179_2260461498062058_4325057480577346673_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ab9ZAqznVm8Q7kNvwFN4QOl&_nc_oc=AdrwW_DAx64drlslBioynQdxgpdhtzAQxcOHfUxsSbup4SAPq93WPKW0C0QQThRRBpk&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=yWqyeEYsV3o6n7L3BiqHqA&_nc_ss=7b2a8&oh=00_AQPKKmTEHmQlBeocToQtDPnWlAluxqPVZVmBqVSHSM0ttA&oe=6AC45B8F"
            alt="Rayhan Aditya working"
            className="about-image"
          />
          <div className="experience-badge">
            <h2>
              0<span className="accent-text">+</span>
            </h2>
            <p>
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="about-text">
          <h2 className="about-heading">
            I'M A PASSIONATE <span className="accent-text">DESIGNER</span> BASED
            IN PHNOM PENH.
          </h2>

          <p className="about-desc">
            I am a fourth-year Software Development student at Norton University
            with a strong interest in building practical and reliable software
            solutions. I enjoy learning new technologies and applying what I
            learn through academic and personal projects.
          </p>

          <p className="about-desc">
            My interests include web development, mobile application
            development, and backend development. I am continuously improving my
            programming skills and looking for opportunities to gain practical
            experience, solve real-world problems, and grow as a software
            developer.
          </p>

          <div className="about-details-grid">
            <div className="detail-item">
              <h4>Name</h4>
              <p>Bun Sothearak</p>
            </div>
            <div className="detail-item">
              <h4>Location</h4>
              <p>Phnom Penh, Cambodia</p>
            </div>
            <div className="detail-item">
              <h4>Email</h4>
              <p>bunthearak05@gmail.com</p>
            </div>
            <div className="detail-item">
              <h4>Student</h4>
              <p className="accent-text">Currently Studying</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
