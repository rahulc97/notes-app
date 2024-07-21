import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from './Button';

export const FullAccessSection = () => {
  const onSignupClick = useCallback(() => {
    navigate('/signup');
  }, []);

  return (
    <div className='flex justify-center items-center pt-16 pb-10 md:py-10 px-[40px] lg:px-[80px] min-h-[600px] w-full bg-white'>
      <div className='flex flex-col md:flex-row items-center justify-center h-full'>
        <div className='w-full md:w-[45%] md:mr-14 max-w-[500px]'>
          <div className='text-[54px] text-center md:text-left leading-[56px] mb-4'>
            24/7 access
          </div>
          <div className='text-[18px] text-[#333] mb-8'>
            Acme notes automatically syncs across all your devices so you can access your most important information anytime, anywhere. No WiFi? No problem—offline mode means you can continue to use Evernote even when the internet cuts out.
          </div>
          <Button label='Start for free' onClick={onSignupClick} className='mt-3' />
        </div>
        <StaticImage src="../images/no-signal.webp" className='w-[300px] lg:w-auto' alt="no-signal" placeholder='blurred' quality={100} />
      </div>
    </div>
  )
};