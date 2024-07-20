import React from 'react';
import Insta from '../assets/insta.svg';
import Twitter from '../assets/twitter.svg';
import LinkedIn from '../assets/linkedIn.svg';
import Facebook from '../assets/facebook.svg';
import Youtube from '../assets/youtube.svg';
import { Link } from 'gatsby';

export const Footer = () => {
  return (
    <footer className='flex justify-center p-[24px] flex-row bg-[#333] min-h-[500px] overflow-hidden'>
      <div className='flex justify-center flex-col md:flex-row'>
        <div className='flex flex-col md:items-start items-center text-white p-[52px] text-[18px]'>
          <p className='font-semibold text-[24px]'>
            Acme Notes
          </p>
          <div className='flex flex-row gap-4 my-6'>
            <Link to="/signup" className='text-white hover:text-gray-200'>
              <Insta />
            </Link>
            <Link to="/signup" className='text-white hover:text-gray-200'>
              <Twitter />
            </Link>
            <Link to="/signup" className='text-white hover:text-gray-200'>
              <LinkedIn />
            </Link>
            <Link to="/signup" className='text-white hover:text-gray-200'>
              <Facebook />
            </Link>
            <Link to="/signup" className='text-white hover:text-gray-200'>
              <Youtube />
            </Link>
          </div>
          <p>
            © 2024 Acme Notes, Inc.
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col xl:flex-row'>
            <div>
              <div className='bg-[#444] h-[1px]'></div>
              <div className='text-white p-[32px] md:p-[52px] text-[16px]'>
                <p className='font-semibold text-[18px]'>
                  Company
                </p>
                <div className='flex flex-col gap-4 my-6'>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    About
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Careers
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Blog
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Press
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Partners
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-[#444] h-[1px]'></div>
              <div className='text-white p-[32px] md:p-[52px] text-[16px]'>
                <p className='font-semibold text-[18px]'>
                  Resources
                </p>
                <div className='flex flex-col gap-4 my-6'>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Pricing
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Help
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    API
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Security
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Legal
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col xl:flex-row'>
            <div>
              <div className='bg-[#444] h-[1px]'></div>
              <div className='text-white p-[32px] md:p-[52px] text-[16px]'>
                <p className='font-semibold text-[18px]'>
                  Contact
                </p>
                <div className='flex flex-col gap-4 my-6'>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Help
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Sales
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Advertise
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Press
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Support
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-[#444] h-[1px]'></div>
              <div className='text-white p-[32px] md:p-[52px] text-[16px]'>
                <p className='font-semibold text-[18px]'>
                  Community
                </p>
                <div className='flex flex-col gap-4 my-6'>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Developers
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Partners
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Investors
                  </Link>
                  <Link to="/signup" className='text-white hover:text-gray-200 no-underline'>
                    Connect
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
