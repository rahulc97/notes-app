import React from 'react';
import { Link } from 'gatsby';
import { FooterSections } from './FooterSections';
import Insta from '../assets/insta.svg';
import Twitter from '../assets/twitter.svg';
import LinkedIn from '../assets/linkedIn.svg';
import Facebook from '../assets/facebook.svg';
import Youtube from '../assets/youtube.svg';

const FOOTER_DATA = {
  company: {
    title: 'Company',
    items: [
      {
        label: 'About',
        link: '/signup',
      },
      {
        label: 'Careers',
        link: '/signup',
      },
      {
        label: 'Blog',
        link: '/signup',
      },
      {
        label: 'Press',
        link: '/signup',
      },
      {
        label: 'Partners',
        link: '/signup',
      },
    ]
  },
  resources: {
    title: 'Resources',
    items: [
      {
        label: 'Pricing',
        link: '/signup',
      },
      {
        label: 'Help',
        link: '/signup',
      },
      {
        label: 'API',
        link: '/signup',
      },
      {
        label: 'Security',
        link: '/signup',
      },
      {
        label: 'Legal',
        link: '/signup',
      },
    ]
  },
  contact: {
    title: 'Contact',
    items: [
      {
        label: 'Help',
        link: '/signup',
      },
      {
        label: 'Sales',
        link: '/signup',
      },
      {
        label: 'Advertise',
        link: '/signup',
      },
      {
        label: 'Press',
        link: '/signup',
      },
      {
        label: 'Support',
        link: '/signup',
      },
    ]
  },
  community: {
    title: 'Community',
    items: [
      {
        label: 'Developers',
        link: '/signup',
      },
      {
        label: 'Partners',
        link: '/signup',
      },
      {
        label: 'Investors',
        link: '/signup',
      },
      {
        label: 'Connect',
        link: '/signup',
      }
    ]
  }
};

const SOCIAL_ICONS = [
  {
    name: 'instagram account',
    link: '/signup',
    icon: <Insta />
  },
  {
    name: 'twitter account',
    link: '/signup',
    icon: <Twitter />
  },
  {
    name: 'linkedin account',
    link: '/signup',
    icon: <LinkedIn />
  },
  {
    name: 'facebook account',
    link: '/signup',
    icon: <Facebook />
  },
  {
    name: 'youtube account',
    link: '/signup',
    icon: <Youtube />
  }]

export const Footer = () => {
  return (
    <footer className='flex justify-center p-[24px] flex-row bg-[#333] min-h-[500px] overflow-hidden'>
      <div className='flex justify-center flex-col md:flex-row'>
        <div className='flex flex-col md:items-start items-center text-white p-[52px] text-[18px]'>
          <p className='font-semibold text-[24px]'>
            Acme Notes
          </p>
          <div className='flex flex-row gap-4 my-6'>
            {SOCIAL_ICONS.map((social, index) => (
              <Link key={index} to={social.link} aria-label={social.name} className='text-white hover:text-gray-200'>
                {social.icon}
              </Link>
            ))}
          </div>
          <p>
            © 2024 Acme Notes, Inc.
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col xl:flex-row'>
            <FooterSections data={FOOTER_DATA.company} />
            <FooterSections data={FOOTER_DATA.resources} />
          </div>
          <div className='flex flex-col xl:flex-row'>
            <FooterSections data={FOOTER_DATA.contact} />
            <FooterSections data={FOOTER_DATA.community} />
          </div>
        </div>
      </div>
    </footer>
  );
};
