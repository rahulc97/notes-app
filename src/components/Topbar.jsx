import { navigate } from 'gatsby';
import React, { useCallback } from 'react';

export const Topbar = () => {
  const onLoginClick = useCallback(() => {
    navigate('/login');
  }, []);

  const onSignupClick = useCallback(() => {
    navigate('/signup');
  }, []);

  return (
    <div>
      <div className='w-full p-8 bg-hero bg-cover h-[912px] fixed'>
        <div className='text-3xl font-semibold text-white'>
          Acme Notes
        </div>
        <div className='text-white text-4xl font-bold relative pl-8 top-[20%]'>
          <p>
            Capture your Notes in a breeze,
          </p>
          <p className='mt-2'>
            Get started for free now!
          </p>
          <div className='px-4 mt-3 text-base w-fit font-semibold py-2 min-w-[125px] text-center  bg-yellow2 shadow-lg cursor-pointer rounded-lg text-white' onClick={onSignupClick} role='presentation'> Try Now </div>
        </div>
      </div>

      <div className='flex flex-row gap-4 h-fit fixed  right-8 top-8 z-[100]'>
        <div className='px-4 py-2 min-w-[125px] text-center bg-gray-100 cursor-pointer rounded-lg text-[#333] font-semibold shadow-lg' onClick={onLoginClick} role='presentation'> Login </div>
        <div className='px-4 py-2 min-w-[125px] text-center  bg-yellow2 cursor-pointer rounded-lg text-white font-semibold shadow-lg' onClick={onSignupClick} role='presentation'> Get Started </div>
      </div>
    </div>
  )
}

Topbar.displayName = 'Topbar';