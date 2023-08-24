import React from 'react'
import coverImage from "../../Assets/Images/vn_cover.jpg"
export default function ViralNation() {
  return (
    <div className='flex flex-col max-w-5xl mx-auto gap-12 mt-8'>
      <div className='h-96 overflow-hidden rounded-xl'>
        <img className='w-full bg-cover object-cover bg-top -mt-28' src={coverImage} alt='viral nation cover'></img>
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='font-semibold text-4xl'>My Journey at Viral Nation</h1>
        <div className='flex justify-between flex-row'>
          <div className='flex flex-col'>
            <h4 className='font-semibold text-xl'>Contribution</h4>
            <ul className='flex flex-col gap-1 ml-6'>
              <li className='text-lg font-light list-disc'>Feature Ideation</li>
              <li className='text-lg font-light list-disc'>Website & App UI Design</li>
              <li className='text-lg font-light list-disc'>Team Lead</li>
              <li className='text-lg font-light list-disc'>Web Development</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold text-xl'>Timeline</h4>
            <p className='text-lg font-light'>Aug 2021 - Aug 2023</p>
          </div>
        </div>
      </div>
      {/* TL;DR Section */}
      <div className='flex flex-col p-8 border-2 border-gray-500 rounded'>
        <h4 className='font-semibold text-xl'>TL;DR</h4>
        <p className='text-lg font-light'>In my first role, I encountered numerous challenges but also reaped immense learnings. My journey taught me how to manage an overwhelming workload, navigate through ambiguous requirements, and adapt to ever-changing demands of upper management.</p>
        {/* <div className='flex justify-end'>
          <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100'>I do not care, show me the visuals</button>
        </div> */}
      </div>
      {/* Body Section */}
      <body className='flex flex-col gap-12'>
        {/* Experience Details Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>The Experience details</h2>
          <div className='flex flex-col gap-4'>
            <p className='text-lg font-light'>Working at a startup, especially one as dynamic as Viral Nation, was a roller-coaster. Here's a breakdown of my experience:</p>
            <ol>
              <li className='text-lg font-light list-decimal'>What I’ve learned.</li>
              <li className='text-lg font-light list-decimal'>Which problems I’ve faced with.</li>
              <li className='text-lg font-light list-decimal'>How I contributed to the company.</li>
            </ol>
          </div>
        </div>
        {/* Contributions Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Contributions to Viral Nation</h2>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Feature Ideation</h3>
            <p className='text-lg font-light'>I played a pivotal role in brainstorming and conceptualizing new features that enhanced user experience and added value to our products. Not all of my ideas were accepted or moved on with but I tried my best to challenge some ideas and think differently.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Visual Design</h3>
            <p className='text-lg font-light'>My designs were not just about aesthetics; they were user-centric, ensuring that our audience had a seamless experience, whether on our website or app.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Development</h3>
            <p className='text-lg font-light'>Beyond design, I also contributed to the development aspect, ensuring that our designs were translated accurately into functional web pages.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>UX Writing</h3>
            <p className='text-lg font-light'>Following the discovery phase, the key attributes for the app were trustworthiness, reliable, clean and intuitive.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Recruitment</h3>
            <p className='text-lg font-light'>I was responsible for finding a suitable future teammate and preparing a design challenge that would determine if he would be a good fit for the culture.</p>
          </div>
        </div>
        {/* Challenges Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Challenges Faced</h2>
          <p className='text-lg font-light'>Every company has its’ own problems. Problems differ but there is not much to do for you other than defining the problems and trying to fix it one by one. That is what I’ve tried to do. Some worked some didn’t. Here are some of them.</p>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Ambiguous Requirements</h3>
            <p className='text-lg font-light'>Startups are known for their dynamic nature. Often, I found myself working with requirements that were not clearly defined. This demanded flexibility and a proactive approach to seek clarity.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Constant Changes</h3>
            <p className='text-lg font-light'>In a fast-paced environment, change is the only constant. Adapting to new requirements, even mid-project, became a regular affair. This taught me the importance of adaptability and resilience. I also learned that documenting change avoids going on circles and not innovating.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Tight Deadlines</h3>
            <p className='text-lg font-light'>One of the most formidable challenges I encountered at Viral Nation was the incredibly short time frames provided for design deliverables. In a startup environment, where agility and speed are often prioritized, I frequently found myself racing against the clock.</p>
          </div>
        </div>
        {/* Takeaways Section */}
        <div className='flex flex-col gap-6 mb-28'>
          <h2 className='font-semibold text-2xl'>Takeaways</h2>
          <p className='text-lg font-light'>My time at Viral Nation was a steep learning curve. The initial months tested my patience and resilience, but as the days rolled on, I formulated some guiding principles that not only helped me meet expectations but also exceed them.</p>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Prioritize and Focus</h3>
            <p className='text-lg font-light'>In a compact design team, multitasking becomes the norm. At one juncture, I found myself juggling three projects simultaneously. In such scenarios, it's imperative to prioritize tasks based on their urgency. Focusing on one task at a time not only boosts efficiency but also prevents the feeling of being swamped.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Establish Continuous Communication</h3>
            <p className='text-lg font-light'>I realized that to truly excel, I needed to align with the company's vision and expectations. This meant constantly asking questions, seeking clarifications, and ensuring I was on the right trajectory. Regular feedback became my compass.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800'>Be Open to Feedback</h3>
            <p className='text-lg font-light'>Design critiques can be tough, especially when they come from non-design stakeholders. Comments like "This doesn't look right" or "Can you make it pop?" were frequent. While these statements were vague, they indicated an underlying issue. My role was to decode these comments, identify the core problem, and address it specifically. Instead of getting defensive or trying to revamp everything, I learned to hone in on the exact concern and rectify it.</p>
          </div>
        </div>
      </body>
    </div>
  )
}
