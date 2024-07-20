import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const ShareThoughts = () => {
  return (
    <div className='bg-market h-[734px] bg-cover relative overflow-hidden py-[80px]'>
      <StaticImage src="../images/phone.png" height={600} width={600} className='absolute bottom-0 left-[15%] -mb-[20px]' />
      <div className='text-white absolute top-[50%] -translate-y-[50%] right-[25%] translate-x-[50%] mx-[80px] w-[35%] max-w-[386px]'>
        <div className='text-[36px]'>
          Share your thoughts with family and friends
        </div>
        <div className='text-[16px] mt-[22px]'>
          Next time you go to the store, share your shopping list on Keep and watch as items get checked off in real time. No need for text messages back and forth. Get things done together, faster.
        </div>
      </div>
    </div>
  );
};
