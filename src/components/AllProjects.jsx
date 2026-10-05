import React from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData';
import './Projects.css';

const AllProjects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project, e) => {
    e.preventDefault();
    navigate(`/project/${project.id}`);
  };

  return (
    <section className="container projects-section">
      <div className="section-title">
        <h3>All Projects</h3>
      </div>

      <div className="projects-grid-modern">
        {projectsData.map((project) => (
          <a
            href={`/project/${project.id}`}
            key={project.id}
            className="modern-project-card"
            onClick={(e) => handleProjectClick(project, e)}
          >
            <div className="modern-image-wrapper">
              <img src={project.img} alt={project.title} />
              <div className="image-overlay"></div>
              <span className="bg-number">{project.id}</span>
            </div>

            <div className="modern-info">
              <div className="modern-header">
                <h4>{project.title}</h4>
                <span className="modern-arrow">↗</span>
              </div>
              <div className="modern-meta">
                <p>{project.category}</p>
                <span>{project.year}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
