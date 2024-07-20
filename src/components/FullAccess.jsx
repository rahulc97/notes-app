import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const FullAccessSection = () => {
  const onSignupClick = useCallback(() => {
    navigate('/signup');
  }, []);

  return (
    <div className='py-10 px-[80px] h-[600px] w-full bg-white'>
      <div className='flex flex-row items-center justify-center h-full'>
        <div className='w-[45%] mr-14 max-w-[500px]'>
          <div className='text-[54px] leading-[56px] mb-4'>
            24/7 access
          </div>
          <div className='text-[18px] text-[#333] mb-8'>
            Acme notes automatically syncs across all your devices so you can access your most important information anytime, anywhere. No WiFi? No problem—offline mode means you can continue to use Evernote even when the internet cuts out.
          </div>
          <div className='px-4 mt-3 text-base w-fit font-semibold py-2 min-w-[125px] text-center  bg-[#ff6b21] shadow-lg cursor-pointer rounded-lg text-white' onClick={onSignupClick} role='presentation'> Start for free </div>
        </div>
        <StaticImage src="../images/no-signal.webp" placeholder='blurred' quality={100} />
      </div>
    </div>
  )
};