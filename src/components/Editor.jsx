import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import editorGif from '../images/editor.gif';

export const Editor = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white px-[80px] py-[100px]'>
      <div className='w-full flex  flex-col items-center mb-[48px]'>
        <div className='text-[#333] text-[48px] font-bold'>
          An editor designed for focus
        </div>
        <div className='text-[#324232] text-[24px] text-center'>
          Just start typing. Everything else fades away <br/>so you can concentrate on the task at hand – no distractions.
        </div>
      </div>
      <div className='shadow-2xl'>
        <img src={editorGif} placeholder='blurred' />
      </div>
    </div>
  );
};
