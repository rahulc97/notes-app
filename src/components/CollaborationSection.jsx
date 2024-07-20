import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const CollaborationSection = () => {
  return (
    <div className='p-10 h-[600px] w-full bg-white'>
      <div className='flex flex-row items-center justify-center h-full'>
        <StaticImage src="../images/teamwork.webp" placeholder='blurred' quality={100} />
        <div className='w-[35%] ml-14'>
          <div className='text-[54px] leading-[56px] mb-4'>
            Effortless collaboration
          </div>
          <div className='text-[18px] text-[#333] mb-8'>
            Acme notes makes it easy to collaborate on projects. Real-Time Editing immediately syncs changes to keep all contributors up to date. The Tasks feature helps you outline the next steps and assign responsibilities. And with unlimited sharing permissions, everyone is the loop and on the same page.
          </div>
          <Link to="/learn-more" className='text-[#333]'>Learn More</Link>
        </div>
      </div>
    </div>
  )
};