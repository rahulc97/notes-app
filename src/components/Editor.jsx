import React from 'react';
import editorGif from '../images/editor.gif';

export const Editor = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white px-[40px] lg:px-[80px] py-[60px] md:py-[100px]'>
      <div className='w-full flex  flex-col items-center mb-[48px]'>
        <div className='text-[#333] text-[24px] sm:text-[32px] md:text-[48px] text-center font-bold'>
          An editor designed for focus
        </div>
        <div className='text-[#324232] text-[14px] sm:text-[16px] md:text-[24px] text-center max-w-[500px] md:max-w-[650px]'>
          Just start typing. Everything else fades away so you can concentrate on the task at hand – no distractions.
        </div>
      </div>
      <div className='shadow-2xl'>
        <img src={editorGif} placeholder='blurred' alt="gif"/>
      </div>
    </div>
  );
};
