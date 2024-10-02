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
          <div className='bg-black grid grid-rows-2 w-full h-full'>
            <div className='flex justify-end items-center p-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-right'>
                <div className='grid-block'>
                  <h1 className='text-3xl text-gray-400 md:text-5xl font-bold'>
                    Big Title 1
                  </h1>
                  <h2 className='text-xl md:text-2xl text-pink-600 font-bold font-light'>
                    Subtitle in Bold 1
                  </h2>
                  <p className='mt-4 text-sm leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='/link-1'
                      className='text-pink-600 hover:underline text-sm md:text-base lg:text-lg'
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className='grid-block'>
                  <h1 className='text-3xl text-gray-400 md:text-5xl font-bold'>
                    Big Title 2
                  </h1>
                  <h2 className='text-xl text-yellow-600 md:text-2xl font-bold font-light'>
                    Subtitle in Bold 2
                  </h2>
                  <p className='mt-4 text-sm leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className='mt-4 flex justify-end'>
                    <a
                      href='/link-2'
                      className='text-yellow-600 hover:underline text-sm md:text-base lg:text-lg'
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className='grid-block'>
                  <h1 className='text-3xl text-gray-400 md:text-5xl font-bold'>
                    Big Title 3
                  </h1>
                  <h2 className='text-xl text-blue-500 md:text-2xl font-light'>
                    Subtitle in Bold 3
                  </h2>
                  <p className='mt-4 text-sm leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='mt-4 flex justify-end'>
                    <a
                      href='/link-3'
                      className='text-blue-500 hover:underline text-sm md:text-base lg:text-lg'
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-lg md:text-xl'>
              <span className='text-6xl md:text-7xl'>Epic</span>
              <span className='mx-2 text-blue-500 text-5xl md:text-6xl'>•</span>
              <span className='text-base md:text-lg'>History</span>
              <span className='mx-2 text-yellow-600 text-4xl md:text-5xl'>
                •
              </span>
              <span className='text-5xl md:text-6xl'>Novel</span>
              <span className='mx-2 text-pink-600 text-6xl md:text-7xl'>•</span>
              <span className='text-2xl md:text-3xl'>Science Fiction</span>
              <span className='mx-2 text-blue-500 text-5xl md:text-6xl'>•</span>
              <span className='text-4xl md:text-5xl'>Environment</span>
              <span className='mx-2 text-yellow-600 text-6xl md:text-7xl'>
                •
              </span>
              <span className='text-sm md:text-base'>Poetry</span>
              <span className='mx-2 text-pink-600 text-5xl md:text-6xl'>•</span>
              <span className='text-lg md:text-xl'>Sustainability</span>
              <span className='mx-2 text-blue-500 text-4xl md:text-5xl'>•</span>
              <span className='text-3xl md:text-4xl'>Short Stories</span>
              <span className='mx-2 text-yellow-600 text-6xl md:text-7xl'>
                •
              </span>
              <span className='text-2xl md:text-3xl'>Vi</span>
              <span className='mx-2 text-pink-600 text-5xl md:text-6xl'>•</span>
              <span className='text-6xl md:text-7xl'>Veri</span>
              <span className='mx-2 text-blue-500 text-5xl md:text-6xl'>•</span>
              <span className='text-4xl md:text-5xl'>Vivus</span>
              <span className='mx-2 text-pink-600 text-6xl md:text-7xl'>•</span>
              <span className='text-2xl md:text-3xl'>Vici</span>
              <span className='mx-2 text-blue-500 text-6xl md:text-7xl'>•</span>
              <span className='text-lg md:text-xl'>Education</span>
              <span className='mx-2 text-yellow-600 text-5xl md:text-6xl'>
                •
              </span>
              <span className='text-6xl md:text-7xl'>Word 15</span>
              <span className='mx-2 text-pink-600 text-6xl md:text-7xl'>•</span>
              <span className='text-sm md:text-base'>Word 16</span>
              <span className='mx-2 text-blue-500 text-5xl md:text-6xl'>•</span>
              <span className='text-base md:text-lg'>Word 17</span>
              <span className='mx-2 text-yellow-600 text-6xl md:text-7xl'>
                •
              </span>
              <span className='text-3xl md:text-4xl'>Word 18</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeMediumRow;
