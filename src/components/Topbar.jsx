import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import HamburgerMenu from '../assets/hamburgerMenu.svg';

export const Topbar = () => {
  const onLoginClick = useCallback(() => {
    navigate('/login');
  }, []);

  const onSignupClick = useCallback(() => {
    navigate('/signup');
  }, []);

  return (
    <div>
      <div className='w-full p-8 bg-mobile-hero sm:bg-hero-2x lg:bg-hero-2x bg-[top_center] min-[400px]:bg-[top_right] md:bg[top_left] bg-[length:439px_auto] min-[400px]:bg-[length:100%_620px] md:bg-cover h-[912px] fixed'>
        <div className='text-3xl font-semibold text-white'>
          Acme Notes
        </div>
        <div className='text-white text-4xl font-bold relative pl-8 top-[30%] lg:top-[20%]'>
          <p>
            Capture your Notes in a breeze,
          </p>
          <p className='mt-2'>
            Get started for free now!
          </p>
          <div className='px-4 mt-3 text-base w-fit font-semibold py-2 min-w-[125px] text-center  bg-[#ff6b21] hover:bg-[#b66841] shadow-lg cursor-pointer rounded-lg text-white' onClick={onSignupClick} role='presentation'> Try Now </div>
        </div>
      </div>

      <div className='flex flex-row gap-4 h-fit fixed  right-8 top-8 z-[100]'>
        <div className='block sm:hidden'>
          <HamburgerMenu />
        </div>
        <div className='hidden sm:block px-4 py-2 min-w-[125px] text-center bg-gray-100 hover:bg-gray-300 cursor-pointer rounded-lg text-[#333] hover:text-black font-semibold shadow-lg' onClick={onLoginClick} role='presentation'> Login </div>
        <div className='hidden sm:block px-4 py-2 min-w-[125px] text-center  bg-[#ff6b21] hover:bg-[#b66841] cursor-pointer rounded-lg text-white font-semibold shadow-lg' onClick={onSignupClick} role='presentation'> Get Started </div>
      </div>
    </div>
  )
}

Topbar.displayName = 'Topbar';