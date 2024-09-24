import React, { FC, Fragment } from "react";

const HomeMediumRow: FC = () => {
  return (
    <Fragment>
      <div className='bg-blue-500 h-[700px] text-white flex justify-center items-center'>
        <div className='grid grid-cols-2 w-full h-full'>
          <div className='bg-red-500 flex justify-center items-center'>
            <div className='grid grid-rows-2 w-full h-full'>
              <div className='bg-yellow-500 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                  <div className='text-xl md:text-3xl text-black font-inter font-bold'>
                    Feira
                  </div>
                  <div className='text-5xl md:text-7xl text-black font-pacifico'>
                    do
                  </div>
                  <div className='text-7xl md:text-9xl text-black font-pacifico'>
                    Livro
                  </div>
                </div>
              </div>
              <div className='bg-pink-600 flex justify-center items-center'>
                <div className='text-7xl md:text-9xl text-black font-pacifico'>
                  do
                </div>
                <div className='text-xl md:text-3xl text-black font-inter font-bold'>
                  Porto
                </div>
                <div className='text-2xl md:text-3xl text-black font-inter font-bold'>
                  2024
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black text-white grid grid-rows-2 w-full h-full'>
            {/* First Row */}
            <div className='flex justify-end items-center p-8'>
              <div className='text-right'>
                <h1 className='text-3xl md:text-5xl font-bold'>Big Title</h1>
                <h2 className='text-xl md:text-2xl font-bold'>
                  Subtitle in Bold
                </h2>
                <p className='mt-4 text-sm md:text-base lg:text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className='flex justify-start items-end p-8'>
              <div className='text-left'>
                <p className='text-lg md:text-xl'>
                  Word 1 <span className='mx-2'>•</span> Word 2{" "}
                  <span className='mx-2'>•</span> Word 3{" "}
                  <span className='mx-2'>•</span> Word 4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeMediumRow;
