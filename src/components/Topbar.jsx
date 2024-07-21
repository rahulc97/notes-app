import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import HamburgerMenu from '../assets/hamburgerMenu.svg';
import { Button } from './Button';

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
          <Button label='Try Now' onClick={onSignupClick} className='mt-3' />
        </div>
      </div>

      <div className='flex flex-row gap-4 h-fit fixed  right-8 top-8 z-[100]'>
        <div className='block sm:hidden'>
          <HamburgerMenu />
        </div>
        <Button label='Login' onClick={onLoginClick} className='hidden sm:block bg-gray-100 hover:bg-gray-300 !text-[#333] !hover:text-black' />
        <Button label='Get Started' onClick={onSignupClick} className='hidden sm:block' />
      </div>
    </div>
  )
}

Topbar.displayName = 'Topbar';