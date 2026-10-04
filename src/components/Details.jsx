import React from 'react';
import './Details.css';

const Details = () => {
  return (
    <section className="container details-section">
      {/* Left Column: Education & Skills */}
      <div
        className="details-col"
        data-animate="fade-up"
        style={{ '--animate-delay': '0.1s' }}
      >
        <div className="section-title">
          <h3>Education </h3>
        </div>

        <div className="education-list stagger">
          <div className="edu-item stagger-item">
            <h4>Education</h4>
            <p>
              Bachelor of Science in Computer Science
              <br />
            </p>
            <div className="edu-meta">
              <span>Norton University</span>
              <span>2022 - current</span>
            </div>
          </div>
        </div>
        <div className="education-list stagger">
          <div className="edu-item stagger-item">
            
            <div className="edu-meta">
              <span>Etec Center </span>
              <span>2018 - 2022</span>
            </div>
          </div>
        </div>
         <div className="education-list stagger">
          <div className="edu-item stagger-item">
            
            <div className="edu-meta">
              <span>Life School (High School)</span>
              <span>2016 - 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Column: Work Process */}
      <div
        className="details-col"
        data-animate="fade-up"
        style={{ '--animate-delay': '0.2s' }}
      >
        <div className="section-title">
          <h3>Work Process</h3>
        </div>
        <div className="process-list stagger">
          {[
            {
              id: '01',
              title: 'Discover',
              desc: 'Understanding goals, audience, and project requirements.',
            },
            {
              id: '02',
              title: 'Ideate',
              desc: 'Planning, wireframing, and creating the right concept.',
            },
            {
              id: '03',
              title: 'Design',
              desc: 'Crafting visual design with a focus on user experience.',
            },
            {
              id: '04',
              title: 'Develop',
              desc: 'Building fast, responsive, and high-performing websites.',
            },
            {
              id: '05',
              title: 'Deliver',
              desc: 'Testing, optimizing, and launching with perfection.',
            },
          ].map((step) => (
            <div key={step.id} className="process-item stagger-item">
              <span className="process-id accent-text">{step.id}</span>
              <div className="process-icon">⚙</div>
              <div className="process-text">
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Quote Box */}
      <div
        className="details-col quote-col"
        data-animate="fade-up"
        style={{ '--animate-delay': '0.3s' }}
      >
        <div
          className="quote-box"
          data-animate="zoom-in"
          style={{ '--animate-delay': '0.1s' }}
        >
          <span className="quote-mark">"</span>
          <p className="quote-text">
            Good design is not just how it looks, but how it works.
          </p>
          <p className="cursive-text signature">TheaRak</p>
          <div className="quote-footer">
            <p>Let's create something great together.</p>
            <span className="accent-text" style={{ fontSize: '1.5rem' }}>
              +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
