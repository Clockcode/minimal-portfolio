import React from 'react'
import ProjectCard from '../Components/ProjectCard';
import vnLogo from "../Assets/Images/CreatorOS_Logo.png"
import profileImage from "../Assets/Images/profile-image.png"
import Projects from "../data/Projects.json"
import coverImage from "../Assets/Images/analyzer_cover.png"
export default function Home() {
  // Update the imgURL property with the imported images
  Projects[0].imgURL = vnLogo;
  Projects[1].imgURL = coverImage;
  return (
    <div className="flex flex-col font-sans">
      <div className='flex flex-col w-full px-2 lg:w-1/2 mx-auto'>
        <div className='flex h-auto w-full mx-auto mt-8'>
          <img className='bg-center mx-auto h-52' src={profileImage} alt="profile" />
        </div>
        <h1 className="text-center font-semibold text-6xl text-gray-900 mb-4">Chadash Muldur</h1>
        <h2 className="font-normal text-2xl text-center text-gray-700 mb-8">
          Hey, I'm Chadash - a digital product designer that enjoys building clean and intuitive designs, based in Toronto.
        </h2>
      </div>
      <section className='flex flex-col md:flex-row gap-6 mx-auto lg:mx-0 justify-center mt-6 mb-20'>
        {Projects.map((project, index) => (
          <ProjectCard {...project} key={index}></ProjectCard>
        ))}
      </section>
    </div >
  );
}
