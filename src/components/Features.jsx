import React from 'react';
import FeatureItem from './FeatureItem';

const FEATURE_LIST = [
  {
    title: 'Clip',
    description: 'Articles, recipes, pages, images—keep track of everything useful you find online.',
    imageName: 'web-clipper-icon.webp',
  },
  {
    title: 'Search',
    description: 'Find any text in any note. We’ll even catch your typos and make suggestions.',
    imageName: 'search-icon.webp',
  },
  {
    title: 'Sync',
    description: 'With Acme on your computer and phone, your notes are always with you.',
    imageName: 'sync-icon.webp',
  },
  {
    title: 'Task',
    description: 'Capture to-do lists with related notes so you can stay in the flow.',
    imageName: 'goals-icon.webp',
  },
  {
    title: 'Sharing',
    description: 'Share a note with friends or family, even if they don’t use Acmee Note.',
    imageName: 'sharing-icon.webp'
  },
  {
    title: 'Security',
    description: 'Safe, secure cloud storage keeps your information protected and private.',
    imageName: 'lock-icon.webp'
  }
]

export const Features = () => {
  return (
    <div className='flex justify-center items-center p-10 min-h-[600px] w-full bg-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center w-full  gap-y-[80px]'>
        {FEATURE_LIST.map((feature) => <FeatureItem key={feature.title} featureData={feature} />)}
      </div>
    </div>
  );
};
