import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const ShareThoughts = () => {
  return (
    <div className='bg-market h-[734px] bg-cover relative overflow-hidden py-[80px]'>
      <StaticImage src="../images/phone.png" objectFit='contain' className='h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] absolute bottom-0 -left-[100px] min-[485px]-left-[0%] xl:left-[15%] lg:-mb-[20px]' />
      <div className='text-white absolute top-[50%] -translate-y-[50%] right-0 sm:right-[25%] sm:translate-x-[50%] mx-[40px] xl:mx-[80px] w-[35%] max-w-[386px]'>
        <div className='text-[24px] sm:text-[36px]'>
          Share your thoughts with family and friends
        </div>
        <div className='text-[14px] sm:text-[16px] mt-[22px]'>
          Next time you go to the store, share your shopping list on Keep and watch as items get checked off in real time. No need for text messages back and forth. Get things done together, faster.
        </div>
      </div>
    </div>
  );
};
