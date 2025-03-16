import React from 'react'
import ProjectCard from '../components/ProjectCard';
import vnLogo from "../assets/images/CreatorOS_Logo.png"
import profileImage from "../assets/images/profile-image.png"
import Projects from "../data/Projects.json"
import coverImage from "../assets/images/analyzer_cover.png"
import map from "../assets/images/map-pin.svg"
export default function Home() {
  // Update the imgURL property with the imported images
  Projects[0].imgURL = vnLogo;
  Projects[1].imgURL = coverImage;
  return (
    <div className="flex flex-col font-sans">
      <div className='flex flex-col w-full px-2 lg:w-1/2 mx-auto'>
        <div className='flex h-auto w-full mx-auto py-4 mt-8'>
          <img className='bg-center mx-auto h-52' src={profileImage} alt="profile" />
        </div>
        <h1 className="text-center font-medium text-5xl text-gray-700 mb-2">Chadash Muldur</h1>
        <h2 className="font-normal text-2xl lg:w-3/4 mx-auto text-center text-gray-600 mb-2">
          Product Designer | Web Developer | Indie Hacker
        </h2>
        <div className='flex flex-row w-full justify-center px-2 gap-1 mx-auto align-middle mb-8'>
          <img className='w-6 stroke-gray-500 color-gray-400' src={map} alt="Map icon" />
          <h2 className="font-normal text-2xl text-center text-gray-500">
            Located in Toronto
          </h2>
        </div>
      </div>
      <section className='flex flex-col md:flex-row gap-6 mx-auto lg:mx-0 justify-center mt-6 mb-20'>
        {Projects.map((project, index) => (
          <ProjectCard {...project} key={index}></ProjectCard>
        ))}
      </section>
    </div >
  );
}
