import React from 'react'
export default function ProjectCard({ url, imgURL, alt, title, desc, subtitles, websiteLink, appLink }) {
  return (
    <a href={url} className='group hover:shadow-md hover:border-blue-200 border-2 p-4 lg:p-8 hover:bg-blue-100 rounded-[16px] w-4/5 md:w-2/3 lg:w-2/5 mx-auto lg:mx-0'>
      <div className='flex flex-col w-full gap-1' >
        <div className='w-full h-80 flex justify-center bg-[#131313] rounded-[12px]'>
          <img src={imgURL} alt={alt} className='object-cover w-full bg-center rounded-[12px]' />
        </div>
        <h3 className='text-2xl font-medium mt-2 text-gray-600 group-hover:text-gray-900'>{title}</h3>
        <p className='text-base font-normal mt-1 text-gray-500'>{desc}</p>
        <ul className='flex gap-3 justify-start p-0 mb-4 -mt-2 align-bottom'>
          {subtitles.map((subtitle, index) => (
            <li className='text-sm font-light text-gray-700 list-none mt-4' key={index}>{subtitle}</li>
          ))}
        </ul>
        <div className='flex flex-col md:flex-row w-full gap-3'>
          {appLink ? <a className='bg-blue-500 text-white rounded h-9 justify-center align-middle text-center px-4 pt-1.5 w-full' href={appLink}>Go to Extension</a> : <div className=''></div>}
          {websiteLink ? <a className='border-blue-500 border-2 text-blue-500 rounded h-9 justify-center align-middle text-center px-4 pt-1 w-full' href={websiteLink}>Go to Website</a> : <div className='h-9'></div>}
        </div>
      </div>
    </a>
  )
}
