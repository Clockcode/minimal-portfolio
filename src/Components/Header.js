import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedin.svg'
import { ReactComponent as MediumIcon } from '../assets/images/medium.svg'
import { ReactComponent as GithubIcon } from '../assets/images/github.svg'
import { ReactComponent as XIcon } from '../assets/images/x.svg'
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
        <a href="https://github.com/Clockcode" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="h-6 fill-current" />
        </a>
        <a href="https://medium.com/@cagdasmuldur" target="_blank" rel="noopener noreferrer">
          <MediumIcon className="h-6 fill-current" />
        </a>
        <a href="https://x.com/cagdas_muldur" target="_blank" rel="noopener noreferrer">
          <XIcon className="h-6 fill-current" style={{ width: '24px', height: '24px' }} />
        </a>
      </div>
    </nav>
  );
}
