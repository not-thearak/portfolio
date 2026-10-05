import React from 'react';
import './Skills.css';

const skillsData = [
  {
    id: '01',
    title: 'Design',
    description: 'Crafting intuitive interfaces and visual identities.',
    skills: ['Web Design', 'UI/UX Design', 'Design Systems' ],
    icon: '✦'
  },
  {
    id: '02',
    title: 'Development',
    description: 'Building fast, responsive, and scalable websites.',
    skills: ['HTML / CSS', 'JavaScript', 'React', 'Flutter', 'Dart', 'Responsive Design', 'PHP', 'Laravel'],
    icon: '⌘'
  },
  {
    id: '03',
    title: 'Tools',
    description: 'The software I use daily to bring ideas to life.',
    skills: ['Figma', 'Framer', 'Webflow', 'Adobe XD', 'Photoshop', 'VS Code'],
    icon: '⚙'
  }
];

const Skills = () => {
  return (
    <section className="container skills-section-modern">
      <div className="section-title">
        <h3>Skills & Expertise</h3>
        <span className="accent-text" style={{ fontSize: '1.5rem' }}>+</span>
      </div>

      <div className="skills-intro">
        <h2 className="skills-heading">
          THE <span className="accent-text">TOOLKIT</span> BEHIND<br/>EVERY PROJECT.
        </h2>
      </div>

      <div className="skills-bento-grid">
        {skillsData.map((category) => (
          <div key={category.id} className="skill-category-card">
            <div className="skill-card-header">
              <span className="skill-number accent-text">{category.id}</span>
              <span className="skill-icon">{category.icon}</span>
            </div>
            
            <h3 className="skill-category-title">{category.title}</h3>
            <p className="skill-category-desc">{category.description}</p>
            
            <ul className="skill-list">
              {category.skills.map((skill, index) => (
                <li key={index} className="skill-pill">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured "Currently Learning" Strip */}
      <div className="currently-learning">
        <div className="learning-dot"></div>
        <p>
          <span className="learning-label">Currently Developing:</span> 
           Demo Movie App khfullhd with Flutter and Dart
        </p>
      </div>
    </section>
  );
};

export default Skills;