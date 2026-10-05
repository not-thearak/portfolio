import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import { getProjectById } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams('id');
  const navigate = useNavigate();
  const project = getProjectById(id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') navigate('/');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  useEffect(() => {
    if (!project) {
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <section className="container project-detail-not-found">
        <h2>Project not found</h2>
        <p>Redirecting back to projects…</p>
      </section>
    );
  }

  const goBack = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="project-detail container" data-animate="fade-up">
      <button
        className="project-detail-back"
        onClick={goBack}
        aria-label="Back to projects"
        data-animate="fade-right"
        style={{ '--animate-delay': '0.1s' }}
      >
        <span className="accent-text">/</span> {project.id}
        <span className="back-arrow">←</span>
      </button>

      <div
        className="project-detail-grid"
        data-animate="fade-up"
        style={{ '--animate-delay': '0.2s' }}
      >
        <div className="project-detail-image-wrapper">
          <img src={project.img} alt={project.title} />
        </div>

        <div className="project-detail-info">
          <div className="project-detail-meta">
            <span className="accent-text">/{project.id}</span>
            <span className="project-year">{project.year}</span>
          </div>

          <h2 className="project-detail-title">{project.title}</h2>
          <p className="project-detail-category">{project.category}</p>

          <p className="project-detail-description">{project.description}</p>

          <div className="project-detail-features">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-bullet">•</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-detail-tech">
            <h3>Technology Stack</h3>
            <div className="tech-pills">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.links && (
            <div className="project-detail-links">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-link-btn"
                >
                  {project.live} <span>↗</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-link-btn"
                >
                  View on GitHub <span>↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
