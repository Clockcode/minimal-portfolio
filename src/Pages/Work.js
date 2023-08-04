import React from 'react'
import ProjectCard from '../Components/ProjectCard'

let viralNationProject = {
  title: "Viral Nation",
  desc: "I started as a junior UI/UX designer then promoted to lead designer thanks to my skills in understanding the business requirements as well as being fast at solving problems.",
  logo: "src/Assets/Images/VN_logo.png",
  link: "/Projects/ViralNationProject"
};
export default function Work() {
console.log(viralNationProject.title)
  return (
    <ProjectCard projectDetails={viralNationProject}></ProjectCard>
  );
}
