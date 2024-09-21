import { FC } from "react";

interface Props {}

const HomeUpperRow: FC<Props> = () => {
  return (
    <div className='bg-blue-500 h-[400px] text-white flex justify-center items-center'>
      Row 1
    </div>
  );
};

export default HomeUpperRow;
