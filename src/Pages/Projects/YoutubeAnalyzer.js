import React from 'react'
import coverImage from "../../Assets/Images/analyzer_cover.png"
import colorPalette from "../../Assets/Images/color_palette.png"
import extension from "../../Assets/Images/extension.png"
import logo from "../../Assets/Images/logo.png"
import website from "../../Assets/Images/website.png"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const ZoomImg = (src, alt) => (
  <Zoom>
    <img
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src={extension}
      width="500"
    />
  </Zoom>
)

export default function YoutubeAnalyzer() {
  return (
    <div className='flex flex-col max-w-5xl mx-auto gap-12 mt-8'>
      <div className='h-96 overflow-hidden rounded-xl'>
        <img className='w-full bg-cover object-cover bg-top' src={coverImage} alt='viral nation cover'></img>
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='font-semibold text-4xl'>Youtube Analyzer - Chrome Extension</h1>
        <div className='flex justify-between flex-row'>
          <div className='flex flex-col'>
            <h4 className='font-semibold text-xl'>Contribution</h4>
            <ul className='flex flex-col gap-1 ml-6'>
              <li className='text-lg font-light list-disc'>Branding</li>
              <li className='text-lg font-light list-disc'>Website & Extension UI Design</li>
              <li className='text-lg font-light list-disc'>Website & Extension Development</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold text-xl'>Technologies</h4>
            <ul className='flex flex-col gap-1 ml-6'>
              <li className='text-lg font-light list-disc'>Python</li>
              <li className='text-lg font-light list-disc'>Gatsby</li>
              <li className='text-lg font-light list-disc'>React</li>
              <li className='text-lg font-light list-disc'>MySQL</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold text-xl'>Timeline</h4>
            <p className='text-lg font-light'>Aug 2022 - Aug 2023</p>
          </div>
        </div>
      </div>
      {/* TL;DR Section */}
      {/* <div className='flex flex-col p-8 border-2 border-gray-500 rounded'>
        <h4 className='font-semibold text-xl'>TL;DR</h4>
        <p className='text-lg font-light'>In my first role, I encountered numerous challenges but also reaped immense learnings. My journey taught me how to manage an overwhelming workload, navigate through ambiguous requirements, and adapt to ever-changing demands of upper management.</p>
        <div className='flex justify-end'>
          <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100'>I do not care, show me the visuals</button>
        </div>
      </div> */}
      {/* Body Section */}
      <body className='flex flex-col gap-12'>
        {/* Experience Details Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>The Project details</h2>
          <div className='flex flex-col gap-4'>
            <p className='text-lg font-light'>Beyond its self-explanatory name, this extension stands as a testament to innovation and user-centric design. It offers users a concise understanding of video content and the community's perspective, all within a user-friendly interface.</p>
          </div>
        </div>
        {/* Contributions Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Contributions</h2>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Website & Extension Design</h3>
            <p className='text-lg font-light'>To educate potential users about the extension's benefits and its two pivotal features, I adopted a minimalist design strategy, ensuring that the interface was intuitive and the message clear.</p>
            <div className='flex h-96 w-full overflow-hidden gap-8'>
              <div className='w-1/2 h-full'>
                <Zoom>
                  <img src={extension} className='w-full h-96 object-contain mx-auto'></img>
                </Zoom>
              </div>
              <div className='w-1/2 h-full'>
                <Zoom>
                  <img src={website} className='w-full h-96 object-contain mx-auto'></img>
                </Zoom>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Branding</h3>
            <p className='text-lg font-light'>To create a recognizable and relatable brand identity, drawing inspiration from YouTube's iconic color palette, I designed a logo that was both simple for instant recognition and unique in its style.</p>
            <div className='flex h-96 overflow-hidden gap-8'>
              <div className='w-1/2 h-full'>
                <Zoom>
                  <img src={colorPalette} className='mx-auto h-96 object-contain'></img>
                </Zoom>
              </div>
              <div className='w-1/2 h-full'>
                <Zoom>
                  <img src={logo} className='w-full h-96 object-contain mx-auto'></img>
                </Zoom>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Front-End Development</h3>
            <p className='text-lg font-light'>To translate the design into a functional, responsive website, despite my reservations, I opted for MUI for its development efficiency. Throughout the process, I emphasized responsiveness to ensure optimal user experience across devices.</p>
          </div>
        </div>
        {/* Challenges Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Challenges Faced</h2>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Project Management</h3>
            <p className='text-lg font-light'>The absence of a structured task management system led to confusion and inefficiencies.Recognizing the need for organization, we soon realized that even small teams benefit from task management tools.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Scope Creep</h3>
            <p className='text-lg font-light'>Our enthusiasm often led us to add features prematurely, resulting in time losses and moments of demotivation. A strategic step back allowed us to define our Minimum Viable Product (MVP) and refocus our efforts on essential features.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Procrastination</h3>
            <p className='text-lg font-light'>Like many, we faced the universal challenge of procrastination. Implementing strict deadlines and holding weekly progress meetings instilled a sense of accountability. The potential embarrassment of not showcasing progress became a driving force.</p>
          </div>
        </div>
        {/* Takeaways Section */}
        <div className='flex flex-col gap-6 mb-28'>
          <h2 className='font-semibold text-2xl'>Takeaways</h2>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Prioritize and Focus</h3>
            <p className='text-lg font-light'>Regardless of team size, a structured task management system is invaluable.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Trust the Process</h3>
            <p className='text-lg font-light'>Challenges are inevitable. Instead of succumbing to stress, it's crucial to believe in the journey, address issues head-on, and keep moving forward.</p>
          </div>
        </div>
      </body >
    </div >
  )
}
