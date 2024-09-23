import { FC, Fragment } from "react";

interface Props {}

const HomeMediumRow: FC<Props> = () => {
  return (
    <Fragment>
      <div className='bg-blue-500 h-[700px] text-white flex justify-center items-center'>
        <div className='grid grid-cols-2 w-full h-full'>
          <div className='bg-red-500 flex justify-center items-center'>
            <div className='grid grid-rows-2 w-full h-full'>
              <div className='bg-yellow-500 flex justify-center items-center'>
                <div className='flex flex-row justify-left items-left space-y-2'>
                  <div className='text-5xl font-inter font-bold'>Feira</div>
                  <div className='text-7xl font-pacifico'>do</div>
                  <div className='text-9xl font-bold'>Livro</div>
                </div>
              </div>
              <div className='bg-blue-500 flex justify-center items-center'>
                <div className='text-7xl font-pacifico'>do</div>
                <div className='text-9xl font-pacifico'>Porto</div>
                <div className='text-5xl font-inter font-bold'>2024</div>
              </div>
            </div>
          </div>
          <div className='bg-green-500 flex justify-center items-center'>
            Column 2
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeMediumRow;
