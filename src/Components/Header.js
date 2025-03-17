import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedin.svg'
import { ReactComponent as MediumIcon } from '../assets/images/medium.svg'
import { ReactComponent as GithubIcon } from '../assets/images/github.svg'
import { ReactComponent as XIcon } from '../assets/images/x.svg'
import "../index.css"
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex pt-8 pb-4 justify-between items-center px-0 flex-wrap ${isScrolled ? 'bg-gray-100 shadow-md' : ''}`}>
      <Link to="/" className='sm:w-1/4 w-full sm:mb-0 mb-4'>
        <h1 className="font-nyata text-center text-xl font-semibold">Chadash.me</h1>
      </Link>
      <div className="space-x-4 flex w-full gap-3 sm:w-2/4 justify-center">
        <a href="https://www.linkedin.com/in/cagdasm/" target="_blank" className="flex items-center" rel="noopener noreferrer">
          <LinkedinIcon className="h-6 fill-current text-gray-800 hover:text-black cursor-pointer transition-colors duration-100" />
        </a>
        <a href="https://github.com/Clockcode" target="_blank" className="flex items-center" rel="noopener noreferrer">
          <GithubIcon className="h-6 fill-current text-gray-800 hover:text-black cursor-pointer transition-colors duration-100" />
        </a>
        <a href="https://medium.com/@cagdasmuldur" target="_blank" className="flex items-center" rel="noopener noreferrer">
          <MediumIcon className="h-6 fill-current text-gray-800 hover:text-black cursor-pointer transition-colors duration-100" />
        </a>
        <a href="https://x.com/cagdas_muldur" target="_blank" className="flex items-center" rel="noopener noreferrer">
          <XIcon className="h-6 fill-current text-gray-800 hover:text-black cursor-pointer transition-colors duration-100" style={{ width: '24px', height: '24px' }} />
        </a>
        <a href="mailto:cagdasmuldur@gmail.com" target="_blank" className="flex items-center" rel="noopener noreferrer">
          <button className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black transition-colors duration-100 hover:cursor-pointer'>Contact Me</button>
        </a>
      </div>
    </nav>
  );
}
