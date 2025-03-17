import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import PasswordPrompt from './PasswordPrompt'

export default function ProjectCard({ url, imgURL, alt, title, desc, subtitles, websiteLink, appLink, locked }) {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  return (
    <>
      <article className='mx-0 w-96 group hover:shadow-md hover:border-blue-200 border-2 p-6 hover:bg-blue-100 rounded-[16px]'>
        <a href={url} onClick={(e) => {
          if (locked) {
            e.preventDefault();
            setShowPasswordPrompt(true);
          }
        }}>
          <div className='flex flex-col w-full gap-8' >
            <div className='h-72 bg-[#131313] rounded-[12px]'>
              <img src={imgURL} alt={alt} className='object-contain w-full h-full rounded-[12px]' />
            </div>
            <div className='flex flex-col w-full justify-between'>
              <div className='flex flex-col gap-3'>
                <h3 className='text-3xl font-medium mt-2 text-gray-600 group-hover:text-gray-900'>{title}</h3>
                <p className='text-base font-normal mt-1 text-gray-500'>{desc}</p>
                <ul className='flex gap-3 justify-start p-0 mb-4 -mt-2 align-bottom'>
                  {subtitles.map((subtitle, index) => (
                    <li className='text-sm font-light text-gray-700 list-none mt-4' key={index}>{subtitle}</li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-row gap-3'>
                {appLink ? <a className='bg-blue-500 text-white rounded h-9 justify-center align-middle text-center px-4 pt-1.5 w-full' href={appLink}>Go to Extension</a> : <div className=''></div>}
                {websiteLink ? <a className='border-blue-500 border-2 text-blue-500 rounded h-9 justify-center align-middle text-center px-4 pt-1 w-full' href={websiteLink}>Go to Website</a> : <div className='h-9'></div>}
              </div>
            </div>
          </div>
        </a>
      </article>
      {showPasswordPrompt && createPortal(
        <PasswordPrompt
          correctPassword="ineedtosee"
          onSuccess={() => setShowPasswordPrompt(false)}
        />,
        document.body
      )}
    </>
  )
}
