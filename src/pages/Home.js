import React from 'react'
import ProjectCard from '../components/ProjectCard';
import Projects from "../data/Projects"
import profileImage from "../assets/images/profile-image.png"
import map from "../assets/images/map-pin.svg"
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='flex flex-col w-full px-2 lg:w-1/2 mx-auto'>
        <div className='flex h-auto w-full mx-auto py-4 pt-20'>
          <img className='bg-center mx-auto h-60 p-2' src={profileImage} alt="profile" />
        </div>
        <h1 className="font-nyata text-center font-medium text-7xl text-gray-700 mb-2">Chadash Muldur</h1>
        <h2 className="font-normal text-2xl lg:w-3/4 mx-auto text-center text-gray-600 mb-2">
          Product Designer | Web Developer
        </h2>
        <div className='flex flex-row w-full justify-center pt-2 gap-1 mx-auto align-middle mb-6'>
          <img className='w-6 stroke-gray-500 color-gray-400' src={map} alt="Map icon" />
          <h2 className="font-normal text-2xl text-center text-gray-500">
            Toronto
          </h2>
        </div>
      </div>
      <section className='flex flex-row flex-wrap gap-6 mx-10 mx-auto justify-center mt-6 mb-20'>
        {Projects.map((project, index) => (
          <ProjectCard {...project} key={index}></ProjectCard>
        ))}
      </section>
    </main>
  );
}
