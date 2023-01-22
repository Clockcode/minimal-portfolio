import React from 'react'
import "../Styles/work.css";

export default function ProjectCard({projectDetails}) {
  console.log(projectDetails.logo)
  return (
    <a href={projectDetails.link}>
      <div className="project">
        <div className="title_with_logo">
          <img
            className="logo"
            src={projectDetails.logo}
            alt="viral nation logo"
          ></img>
          <h4 className="title">{projectDetails.title}</h4>
        </div>
        <div className="description">{projectDetails.desc}</div>
        <div className="project_images">
          <img className="project_image" alt="project"></img>
          <img className="project_image" alt="project"></img>
          <img className="project_image" alt="project"></img>
        </div>
      </div>
    </a>
  );
}
