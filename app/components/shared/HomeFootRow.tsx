import { FC } from "react";

interface Props {}

const HomeFootRow: FC<Props> = () => {
  return (
    <div className='bg-yellow-500 h-[400px] text-white flex justify-center items-center'>
      Row 1
    </div>
  );
};

export default HomeFootRow;
