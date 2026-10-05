import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { featuredProject, otherProjects } from '../data/projectsData';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project, e) => {
    e.preventDefault();
    navigate(`/project/${project.id}`);
  };

  const handleViewAll = (e) => {
    e.preventDefault();
    navigate('/all');
  };

  return (
    <section className="container projects-section">
      {/* Section Header */}
      <div className="section-title">
        <h3>Selected Projects</h3>
        <a href="#all" className="view-all" onClick={handleViewAll}>
          View All Projects <span className="arrow-icon">→</span>
        </a>
      </div>

      {/* Featured Project (Big Card) */}
      {featuredProject && (
        <a
          href={`/project/${featuredProject.id}`}
          className="featured-project-card"
          onClick={(e) => handleProjectClick(featuredProject, e)}
        >
          <div className="featured-image-wrapper">
            <img src={featuredProject.img} alt={featuredProject.title} />
            <div className="image-overlay"></div>
          </div>

          <div className="featured-content">
            <div className="featured-meta">
              <span className="project-id accent-text">/{featuredProject.id}</span>
              <span className="project-year">{featuredProject.year}</span>
            </div>
            <h2 className="featured-title">{featuredProject.title}</h2>
            <p className="featured-category">{featuredProject.category}</p>

            <div className="featured-action">
              <span>View Details</span>
              <span className="circle-arrow">→</span>
            </div>
          </div>
        </a>
      )}

      {/* Other Projects (Grid) */}
      <div className="projects-grid-modern">
        {otherProjects.map((project) => (
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

export default Projects;
