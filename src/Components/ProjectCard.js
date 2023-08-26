import React from 'react'
export default function ProjectCard({ url, imgURL, alt, title, desc, subtitles }) {
  return (
    <a href={url} className='hover:shadow-sm hover:border-blue-100 border-2 p-4 lg:p-8 hover:bg-blue-50 rounded-[16px] w-4/5 md:w-2/3 lg:w-2/5 mx-auto lg:mx-0'>
      <div className='flex flex-col w-full gap-1 group' >
        <div className='w-full h-80 flex justify-center bg-[#131313] rounded-[12px] group-hover:rounded-none'>
          <img src={imgURL} alt={alt} className='object-contain sm:object-cover w-full bg-center rounded-[12px]' />
        </div>
        <h3 className='text-2xl font-medium mt-2 text-gray-900'>{title}</h3>
        <p className='text-base font-normal mt-0 text-gray-800'>{desc}</p>
        <ul className='flex gap-3 justify-start p-0 m-0'>
          {subtitles.map((subtitle, index) => (
            <li className='text-sm font-light text-gray-700 list-none mt-4' key={index}>{subtitle}</li>
          ))}
        </ul>
      </div>
    </a>
  )
}
