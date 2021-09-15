import React from 'react';

const Project = (project) => {
  // Data: name, description, img, optional: blog link, outside link
  return (
    <div className="project">
      <div className="project__card">
        <h3 className="project__title">{project.name}</h3>
        <img src={project.img} alt={project.name} />
        <p className="project__description">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;