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
      <div className='w-full p-8 flex flex-row justify-between bg-hero bg-cover h-[912px] fixed'>
        <div className='text-3xl font-semibold text-white'>
          Acme Notes
        </div>
      </div>
      <div className='flex flex-row gap-2 h-fit fixed  right-8 top-8 z-[100]'>
        <div className='px-4 py-2 min-w-[125px] text-center bg-yellow2 cursor-pointer rounded-lg text-white' onClick={onLoginClick} role='presentation'> Login </div>
        <div className='px-4 py-2 min-w-[125px] text-center  bg-yellow2 cursor-pointer rounded-lg text-white' onClick={onSignupClick} role='presentation'> Get Started </div>
      </div>
    </div>
  )
}

Topbar.displayName = 'Topbar';