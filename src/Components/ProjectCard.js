import React from 'react'
import styles from './ProjectCard.module.css'
export default function ProjectCard({url, imgURL, alt, title, desc, subtitles}) {
  return (
    <a href={url}>
      <div className={styles.card} >
        <div className={styles.imgDiv}>
          <img src={imgURL} alt={alt} />
        </div>
        <h3 >{title}</h3>
        <p>{desc}</p>
        <ul>
          {subtitles.map((subtitle, index) => (
            <li key={index}>{subtitle}</li>
            ))}
        </ul>
      </div>
    </a>
  )
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
