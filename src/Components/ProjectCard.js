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
}
