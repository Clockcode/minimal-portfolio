import React from 'react'
import ProjectCard from '../Components/ProjectCard';
import '../Styles/home.css'
import ytImage from "../Assets/Images/youtube-analyzer-widget.png"
import vnLogo from "../Assets/Images/vn-logo.png"
import profileImage from "../Assets/Images/profile-image.png"
import Projects from "../data/Projects.json"
export default function Home() {
  // Update the imgURL property with the imported images
  Projects[0].imgURL = vnLogo;
  Projects[1].imgURL = ytImage;
  return (
    <div className="home">
      <h1 className="title">Cagdas Muldur</h1>
      <div className="subtitle">
        Hey, I'm Cagdas - a digital product designer that enjoys building clean and intuitive designs, based in Toronto.
      </div>
      <section className='projects'>
        {Projects.map((project, index) => (
          <ProjectCard {...project} key={index}></ProjectCard>
        ))}
      </section>
      <section className='about'>
        <div className='about-text'>
          <h3>About</h3>
          <div className='paragraph'>
            <p className='paragraph-section'>
              Born and raised in Turkey. Been living in Toronto for the past 4 years.
            </p>
            <p className='paragraph-section'>
              Background in programming helped me come up with viable solutions that help grow the business and create simple designs that give users confidence.
            </p>
            <p className='paragraph-section'>
              In my spare time, you can find me reading stuff, writing stuff, thinking about peculiarity of life and travelling.
            </p>
            <p className='paragraph-section'>
              As of 2023, I live in Toronto, the most populated city in Canada and enjoy being warm at home or freezing outside.
            </p>
          </div>
        </div>
        <div className='about-img'>
          <img src={profileImage} alt="profile" />
        </div>
      </section>
    </div>
  );
}
