import { Link } from 'gatsby';
import React from 'react';

export const FooterSections = ({ data }) => {
  return (
    <div>
      <div className='bg-[#444] h-[1px]' />
      <div className='text-white p-[32px] md:p-[52px] text-[16px]'>
        <p className='font-semibold text-[18px]'>
          {data.title}
        </p>
        <div className='flex flex-col gap-4 my-6'>
          {data.items.map((item, index) => (
            <Link key={index} to={item.link} className='text-white hover:text-gray-200 no-underline'>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};