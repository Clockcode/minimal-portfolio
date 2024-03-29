import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as LinkedinIcon } from '../Assets/Images/linkedin.svg'
import { ReactComponent as MediumIcon } from '../Assets/Images/medium.svg'
import { ReactComponent as GithubIcon } from '../Assets/Images/github.svg'
import { ReactComponent as YoutubeIcon } from '../Assets/Images/youtube.svg'
export default function Header() {

  return (
    <nav className='w-full flex pt-8 justify-between items-center px-0 flex-wrap'>
      <Link to="/" className='sm:w-1/4 w-full sm:mb-0 mb-4'>
        <h1 className="text-center text-xl font-normal">Chadash.me</h1>
      </Link>
      <div className="space-x-4 flex w-full gap-3 sm:w-2/4 justify-center">
        <a href="https://www.linkedin.com/in/cagdasm/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="h-6 fill-current" />
        </a>
        {/* <img src={LinkedinIcon} alt="LinkedIn" className="h-4 w-4 fill-current" /> */}
        <a href="https://github.com/Clockcode" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="h-6 fill-current" />
        </a>
        <a href="https://medium.com/@cagdasmuldur" target="_blank" rel="noopener noreferrer">
          <MediumIcon className="h-6 fill-current" />
        </a>
        <a href="https://www.youtube.com/channel/UCItdJQjCFABuVKCmieFrUDA" target="_blank" rel="noopener noreferrer">
          <YoutubeIcon className="h-6 fill-current" />
        </a>
        <a href="https://drive.google.com/file/d/1fNL3hmFfcHLgJi7uLe-3wl99x_KqjTbP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
}
