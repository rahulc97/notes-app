import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const CollaborationSection = () => {
  return (
    <div className='flex justify-center items-center p-10 min-h-[600px] w-full bg-white'>
      <div className='flex flex-col md:flex-row items-center justify-center h-full'>
        <StaticImage src="../images/teamwork.webp" className='w-[260px] sm:w-[300px] lg:w-auto' alt="teamwork" placeholder='blurred' quality={100} />
        <div className='w-full md:w-[48%] md:ml-14'>
          <div className='text-[32px] md:text-[54px] text-center md:text-left md:leading-[56px] mb-4'>
            Effortless collaboration
          </div>
          <div className='text-[14px] md:text-[18px] text-[#333] mb-4 md:mb-8'>
            Acme notes makes it easy to collaborate on projects. Real-Time Editing immediately syncs changes to keep all contributors up to date. The Tasks feature helps you outline the next steps and assign responsibilities. And with unlimited sharing permissions, everyone is the loop and on the same page.
          </div>
          <Link to="/learn-more" className='text-[#333]'>Click here to learn more</Link>
        </div>
      </div>
    </div>
  )
};