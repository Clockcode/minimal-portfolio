import React, { useState } from 'react';
import PasswordPrompt from '../../components/PasswordPrompt';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import coverImage from "../../assets/images/vn_cover.jpg"
import designKit from "../../assets/images/DesignKit.png"
import dev1 from "../../assets/images/Dev01.png"
import dev2 from "../../assets/images/Dev02.png"
import buyermanage from "../../assets/images/BuyerManagement.jpg"
import talentmanage from "../../assets/images/TalentManagement.jpg"
import shortlist from "../../assets/images/Shortlist.jpg"
import mediakit from "../../assets/images/MediaKit.jpg"
import mediakit2 from "../../assets/images/MediaKit2.jpg"
import object_cube from "../../assets/images/object_cube.webp"
import problem_cube from "../../assets/images/problem_cube.webp"
import solution_cube from "../../assets/images/solution_cube.webp"
import talent_flow from "../../assets/images/talent_agent_deal.png"
import competitive_analysis from "../../assets/images/competitive_analysis.png"
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
    <div className='flex flex-col max-w-6xl mx-auto gap-12 mt-8'>
      {/* Header Section */}
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-1 mx-auto sm:mx-12 lg:mx-0'>
          <h1 className='font-regular text-4xl text-gray-800 text-center sm:text-left'>Creator_OS</h1>
          <h2 className='font-light text-2xl text-gray-600 text-center sm:text-left'>Discover Creators & Manage Deals</h2>
        </div>
        <div className='h-96 md:overflow-hidden lg:rounded-xl'>
          <img className='w-full h-full bg-cover object-cover bg-top md:-mt-14' src={coverImage} alt='viral nation cover'></img>
        </div>
        {/* Sections Section */}
        <div className='flex justify-between sm:flex-row sm:mx-8 md:-mt-10 lg:-mt-14 lg:mx-0'>
          <div className='flex flex-col mx-auto w-1/2 text-center md:text-left md:mx-0'>
            <h4 className='font-semibold text-xl'>Team</h4>
            <ul className='flex flex-col gap-1'>
              <li className='text-lg font-light'>1 Product Designer</li>
              <li className='text-lg font-light'>2 Frontend Developers</li>
              <li className='text-lg font-light'>2 Backend Developers</li>
              <li className='text-lg font-light'>Product Manager</li>
            </ul>
          </div>
          <div className='flex flex-col mx-auto w-1/2 text-center md:text-left md:mx-0'>
            <h4 className='font-semibold text-xl'>Responsibilites</h4>
            <ul className='flex flex-col gap-1'>
              <li className='text-lg font-light'>Exploration & Conceptualisation</li>
              <li className='text-lg font-light'>User Research</li>
              <li className='text-lg font-light'>High Fidelity Mockups</li>
              <li className='text-lg font-light'>Design Hand Off</li>
            </ul>
          </div>
          <div className='flex flex-col mx-auto w-1/2 text-center md:text-left md:mx-0'>
            <h4 className='font-semibold text-xl'>Timeline</h4>
            <p className='text-lg font-light'>Aug 2021 - Current</p>
          </div>
        </div>
      </div>
      {/* TL;DR Section */}
      <div className='flex flex-col p-8 border-2 m-4 lg:m-0 border-gray-300 rounded'>
        <h4 className='font-semibold text-xl mb-2'>TL;DR</h4>
        <p className='text-lg font-light'>In my first role, I encountered numerous challenges but also reaped immense learnings. My journey taught me how to manage an overwhelming workload, navigate through ambiguous requirements, and adapt to ever-changing demands of upper management.</p>
        <div className='flex justify-end mt-4'>
          <button onClick={handleClickScroll} className='border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100'>I do not care, show me the visuals</button>
        </div>
      </div>
      {/* Cubes Section */}
      <div className='flex flex-col gap-12 lg:flex-row'>
        <div className='w-3/4 md:w-1/2 mx-auto flex flex-col sm:w-1/4'>
          <img className='w-28 mb-2 mx-auto sm:w-36 lg:w-24' src={problem_cube} alt='cube' />
          <h4 className='font-semibold text-xl text-blue-500 mb-3 text-center'>The Problem</h4>
          <p className='text-lg lg:text-md font-light text-center'>Their stand-alone platform, <span className='font-bold text-blue-500'>Influsoft</span> was slow didn’t have enough features hence agents hated to use. On top of that, design was not consistent and features were not discoverable. it also didn’t fit close with company’s plan for building an ecosystem of products.</p></div>
        <div className='w-3/4 md:w-1/2 mx-auto flex flex-col sm:w-1/4'>
          <img className='w-28 mb-2 mx-auto sm:w-36 lg:w-24' src={object_cube} alt='cube' />
          <h4 className='font-semibold text-xl text-blue-500 mb-3 text-center'>The Objective</h4>
          <p className='text-lg lg:text-md font-light text-center'>My objective was to redesign the visual look of the platform adhering the brand guidelines. Improving user experience based on the learnings they have had over the years. Also keeping a consistent look and feel throughout products.</p>
        </div>
        <div className='w-3/4 md:w-1/2 mx-auto flex flex-col sm:w-1/4'>
          <img className='w-28 mb-2 mx-auto sm:w-36 lg:w-24' src={solution_cube} alt='cube' />
          <h4 className='font-semibold text-xl text-blue-500 mb-3 text-center'>The Solution</h4>
          <p className='text-lg lg:text-md font-light text-center'>Building a comprehensive design system that encapsulates all ecosystem products. Coming up with new features and fixing discoverability features based on agents’ feedback.</p>
        </div>
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
            <p className='text-lg font-light'>I played a pivotal role in brainstorming and conceptualizing new features that enhanced user experience and added value to our products. Not all of my ideas were accepted or moved on with but I tried my best to challenge status quo and call attention to user.</p>
          </div>
          <Zoom>
            <img src={talent_flow} alt='talent agency deal lifecycle' className='w-full h-full'></img>
            <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>Talent Flow</p>
          </Zoom>
          <Zoom>
            <img src={competitive_analysis} alt='talent agency deal lifecycle' className='w-full h-full'></img>
            <p className='text-sm font-light text-center text-gray-400 mb-8 mt-2'>Competitive Analysis</p>
          </Zoom>
          <div className='flex flex-col gap-4 relative' id='visuals'>
            <h3 className='text-blue-800 text-xl'>Visual Design</h3>
            <p className='text-lg font-light'>My designs were not just about aesthetics; they were user-centric, ensuring that our audience had a seamless experience, whether on our website or app. Collaborating with my teammates and making quick and valuable decisions were a crucial aspect of making user experience consistent and visually appealing.</p>
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
            <div className='flex flex-col w-full gap-20'>
              <p className='text-lg font-light mt-4 -mb-10 '>Published and maintained an icon NPM package that was used company wide.</p>
              <Zoom>
                <img src={dev1} alt='npm profile screenshot' className='w-full'></img>
              </Zoom>
            </div>
            <div className='flex flex-col w-full gap-20'>
              <p className='text-lg font-light mt-4 -mb-10 '>Contributed to multiple repositories by fixing visual inconsistencies when developers were pulled for new features. I adhered to code standards and PR guidelines.</p>
              <Zoom>
                <img src={dev2} alt='github profile screenshot' className='w-full'></img>
              </Zoom>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>UX Writing</h3>
            <p className='text-lg font-light'>Following the discovery phase, the key attributes for the app were trustworthiness, reliable, clean and intuitive.</p>
          </div>
        </div>
        {/* Challenges Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Challenges Faced</h2>
          <p className='text-lg font-light'>Every company has its’ own problems. I believe designers’ job is to define the problems and plan ways to mitigate them. That is what I’ve tried to do. Some worked some didn’t. Here are some of them I’ve worked on and was successful.</p>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Ambiguous Requirements</h3>
            <p className='text-lg font-light'>Startups are known for their dynamic nature. Often, I found myself working with requirements that were not clearly defined. This demanded flexibility and a proactive approach to seek clarity. This meant constantly asking questions, seeking clarifications, and ensuring I was on the right trajectory. Regular feedback became my compass.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Constant Changes</h3>
            <p className='text-lg font-light'>In a fast-paced environment, change is the only constant. Adapting to new requirements, even mid-project, became a regular affair. This taught me the importance of adaptability and resilience. I also learned that documenting changes and keeping old design files organized avoids going on circles with a flow or page.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-blue-800 text-xl'>Tight Deadlines</h3>
            <p className='text-lg font-light'>One of the most formidable challenges I encountered at Viral Nation was the incredibly short time frames provided for design deliverables. In a startup environment, where agility and speed are often prioritized, I frequently found myself racing against the clock. In such scenarios, it's vital to prioritize tasks based on their urgency. Focusing on one task at a time not only boosts efficiency but also prevents the feeling of being swamped.</p>
          </div>
        </div>
        {/* Takeaways Section */}
        <div className='flex flex-col gap-6 mb-28'>
          <h2 className='font-semibold text-2xl'>Takeaways</h2>
          <p className='text-lg font-light'>My time at Viral Nation was a steep learning curve. The initial months tested my patience and resilience, but as the days rolled on, principles I formulated not only helped me meet expectations but also exceed them.</p>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-blue-800 text-xl'>Be Open to Feedback</h3>
              <p className='text-lg font-light'>Design critiques can be tough, especially when they come from non-design stakeholders. Comments like "This doesn't look right" or "Can you make it pop?" were frequent. While these statements are vague, they indicate an underlying issue. My role is to decode these comments, identify the core problem, and address it specifically. Instead of getting defensive or trying to revamp everything, I learned to hone in on the exact concern and rectify it.</p>
            </div>
            <h3 className='text-blue-800 text-xl'>Don't Be Afraid yo Try New Stuff</h3>
            <p className='text-lg font-light'>Whether it is animation, illustration or a strange layout, trying something new is hard at first but it is fun too. I learned to enjoy the process and cherish with small wins.</p>
          </div>
        </div>
      </body>
    </div>
  )
}
