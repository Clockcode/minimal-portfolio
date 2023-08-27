import React, { useState } from 'react';
import PasswordPrompt from '../../Components/PasswordPrompt';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import coverImage from "../../Assets/Images/vn_cover.jpg"
import designKit from "../../Assets/Images/DesignKit.png"
import dev1 from "../../Assets/Images/Dev01.png"
import dev2 from "../../Assets/Images/Dev02.png"
import buyermanage from "../../Assets/Images/BuyerManagement.jpg"
import talentmanage from "../../Assets/Images/TalentManagement.jpg"
import shortlist from "../../Assets/Images/Shortlist.jpg"
import mediakit from "../../Assets/Images/MediaKit.jpg"
import mediakit2 from "../../Assets/Images/MediaKit2.jpg"
import object_cube from "../../Assets/Images/object_cube.webp"
import problem_cube from "../../Assets/Images/problem_cube.webp"
import solution_cube from "../../Assets/Images/solution_cube.webp"
export default function ViralNation() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return (
      <PasswordPrompt
        correctPassword="ineedtosee"
        onSuccess={() => setAuthenticated(true)}
      />
    );
  }
  const handleClickScroll = () => {
    const element = document.getElementById('visuals');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='flex flex-col max-w-4xl mx-auto gap-12 mt-8'>
      {/* Header Section */}
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-1 mx-auto sm:mx-12 lg:mx-0'>
          <h1 className='font-regular text-4xl text-gray-800 text-center sm:text-left'>Creator_OS</h1>
          <h2 className='font-light text-2xl text-gray-600 text-center sm:text-left'>Discover Creators & Manage Deals</h2>
        </div>
        <div className='h-96 md:overflow-hidden lg:rounded-xl'>
          <img className='w-full h-full bg-cover object-cover bg-top md:-mt-14 lg:-mt-16' src={coverImage} alt='viral nation cover'></img>
        </div>
        <div className='flex justify-between sm:flex-row sm:mx-8 md:-mt-10 lg:-mt-14 lg:mx-0'>
          <div className='flex flex-col mx-auto w-1/2 text-center md:text-left md:mx-0'>
            <h4 className='font-semibold text-xl'>Contribution</h4>
            <ul className='flex flex-col gap-1'>
              <li className='text-lg font-light'>Feature Ideation</li>
              <li className='text-lg font-light'>Website & App UI Design</li>
              <li className='text-lg font-light'>Team Lead</li>
              <li className='text-lg font-light'>Web Development</li>
            </ul>
          </div>
          <div className='flex flex-col mx-auto w-1/2 text-center md:text-right md:mx-0'>
            <h4 className='font-semibold text-xl'>Timeline</h4>
            <p className='text-lg font-light'>Aug 2021 - Current</p>
          </div>
        </div>
      </div>
      {/* TL;DR Section */}
      <div className='flex flex-col p-8 border-2 m-4 lg:m-0 border-gray-500 rounded'>
        <h4 className='font-semibold text-xl'>TL;DR</h4>
        <p className='text-lg font-light'>In my first role, I encountered numerous challenges but also reaped immense learnings. My journey taught me how to manage an overwhelming workload, navigate through ambiguous requirements, and adapt to ever-changing demands of upper management.</p>
        <div className='flex justify-end'>
          <button onClick={handleClickScroll} className='border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100'>I do not care, show me the visuals</button>
        </div>
      </div>
      {/* Cubes Section */}
      <div className='flex flex-col gap-12 lg:flex-row'>
        <div className='w-3/4 md:w-1/2 mx-auto flex flex-col sm:w/14'>
          <img className='w-28 mb-2 mx-auto sm:w-36 lg:w-24' src={problem_cube} alt='cube' />
          <h4 className='font-semibold text-xl text-blue-500 mb-3 text-center'>The Problem</h4>
          <p className='text-lg font-light text-center'>Their stand-alone platform, <span className='font-bold text-blue-500'>Influsoft</span> was a slow, feature-bloated product hell that agents hated to use. It was not intuitive and features were not discoverable. It also failed at conveying brand.</p></div>
        <div className='w-3/4 md:w-1/2 mx-auto flex flex-col sm:w/14'>
          <img className='w-28 mb-2 mx-auto sm:w-36 lg:w-24' src={object_cube} alt='cube' />
          <h4 className='font-semibold text-xl text-blue-500 mb-3 text-center'>The Objective</h4>
          <p className='text-lg font-light text-center'>My objective was to redesign the whole platform from scratch. Adhering the brand guidelines as well as making it as intuitive to use as possible with extra features like discovering buyers.</p></div>
        <div className='w-3/4 md:w-1/2 mx-auto flex flex-col sm:w/14'>
          <img className='w-28 mb-2 mx-auto sm:w-36 lg:w-24' src={solution_cube} alt='cube' />
          <h4 className='font-semibold text-xl text-blue-500 mb-3 text-center'>The Solution</h4>
          <p className='text-lg font-light text-center'>Simplified agent experience, made it easier to find creators and assess them. Also improving buyer experience helped agents vouch for their creators which will result in higher deal completion.</p></div>
      </div>
      {/* Body Section */}
      <body className='flex flex-col gap-12 mx-8 lg:mx-0'>
        {/* Experience Details Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>The Experience details</h2>
          <div className='flex flex-col gap-4'>
            <p className='text-lg font-light'>In my first role, I encountered numerous challenges but also reaped immense learnings. My journey taught me how to manage an overwhelming workload, navigate through ambiguous requirements, and adapt to ever-changing demands of upper management.</p>
          </div>
        </div>
        {/* Contributions Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Contributions to Viral Nation</h2>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Feature Ideation</h3>
            <p className='text-lg font-light'>I played a pivotal role in brainstorming and conceptualizing new features that enhanced user experience and added value to our products. Not all of my ideas were accepted or moved on with but I tried my best to challenge some ideas and think differently.</p>
          </div>
          <div className='flex flex-col gap-4 relative' id='visuals'>
            <h3 className='text-blue-800 text-xl'>Visual Design</h3>
            <p className='text-lg font-light'>My designs were not just about aesthetics; they were user-centric, ensuring that our audience had a seamless experience, whether on our website or app.</p>
            <Zoom>
              <img src={designKit} alt='design kit assets' className='w-full h-full'></img>
              <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>Design Kit</p>
            </Zoom>
            <Zoom>
              <img src={talentmanage} alt='talent management home page' className='w-full h-full'></img>
              <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>Talent Management Home Page</p>
            </Zoom>
            <Zoom>
              <img src={buyermanage} alt='buyer management home page' className='w-full h-full'></img>
              <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>Buyer Management Home Page</p>
            </Zoom>
            <Zoom>
              <img src={shortlist} alt='shortlist example main page' className='w-full h-full'></img>
              <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>Shortlist Profile Tab</p>
            </Zoom>
            <Zoom>
              <img src={mediakit} alt='mediakit cover page' className='w-full h-full'></img>
              <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>MediaKit Cover Page</p>
            </Zoom>
            <Zoom>
              <img src={mediakit2} alt='mediakit analytics page' className='w-full h-full'></img>
              <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>MediaKit Overall Metrics</p>
            </Zoom>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Development</h3>
            <p className='text-lg font-light'>Beyond design, I also contributed to the development aspect, ensuring that our designs were translated accurately into functional web pages.</p>
            <div className='flex w-full gap-20'>
              <p className='text-lg font-light mt-6 w-2/3'>Published and maintained an icon NPM package that was used company wide.</p>
              <Zoom>
                <img src={dev1} alt='npm profile screenshot' className='w-full'></img>
              </Zoom>
            </div>
            <div className='flex w-full gap-20'>
              <p className='text-lg font-light mt-6 w-2/3'>Contributed to multiple repositories by fixing visual inconsistencies when developers were pulled for new features.<br /> <br /> I adhered to code standards and PR guidelines.</p>
              <Zoom>
                <img src={dev2} alt='github profile screenshot' className='w-full'></img>
              </Zoom>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>UX Writing</h3>
            <p className='text-lg font-light'>Following the discovery phase, the key attributes for the app were trustworthiness, reliable, clean and intuitive.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Recruitment</h3>
            <p className='text-lg font-light'>I was responsible for finding a suitable future teammate and preparing a design challenge that would determine if he would be a good fit for the culture.</p>
          </div>
        </div>
        {/* Challenges Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Challenges Faced</h2>
          <p className='text-lg font-light'>Every company has its’ own problems. Problems differ but there is not much to do for you other than defining the problems and trying to fix it one by one. That is what I’ve tried to do. Some worked some didn’t. Here are some of them.</p>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Ambiguous Requirements</h3>
            <p className='text-lg font-light'>Startups are known for their dynamic nature. Often, I found myself working with requirements that were not clearly defined. This demanded flexibility and a proactive approach to seek clarity.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Constant Changes</h3>
            <p className='text-lg font-light'>In a fast-paced environment, change is the only constant. Adapting to new requirements, even mid-project, became a regular affair. This taught me the importance of adaptability and resilience. I also learned that documenting change avoids going on circles and not innovating.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Tight Deadlines</h3>
            <p className='text-lg font-light'>One of the most formidable challenges I encountered at Viral Nation was the incredibly short time frames provided for design deliverables. In a startup environment, where agility and speed are often prioritized, I frequently found myself racing against the clock.</p>
          </div>
        </div>
        {/* Takeaways Section */}
        <div className='flex flex-col gap-6 mb-28'>
          <h2 className='font-semibold text-2xl'>Takeaways</h2>
          <p className='text-lg font-light'>My time at Viral Nation was a steep learning curve. The initial months tested my patience and resilience, but as the days rolled on, I formulated some guiding principles that not only helped me meet expectations but also exceed them.</p>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Prioritize and Focus</h3>
            <p className='text-lg font-light'>In a compact design team, multitasking becomes the norm. At one juncture, I found myself juggling three projects simultaneously. In such scenarios, it's imperative to prioritize tasks based on their urgency. Focusing on one task at a time not only boosts efficiency but also prevents the feeling of being swamped.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Establish Continuous Communication</h3>
            <p className='text-lg font-light'>I realized that to truly excel, I needed to align with the company's vision and expectations. This meant constantly asking questions, seeking clarifications, and ensuring I was on the right trajectory. Regular feedback became my compass.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Be Open to Feedback</h3>
            <p className='text-lg font-light'>Design critiques can be tough, especially when they come from non-design stakeholders. Comments like "This doesn't look right" or "Can you make it pop?" were frequent. While these statements were vague, they indicated an underlying issue. My role was to decode these comments, identify the core problem, and address it specifically. Instead of getting defensive or trying to revamp everything, I learned to hone in on the exact concern and rectify it.</p>
          </div>
        </div>
      </body>
    </div>
  )
}
