import { FC } from "react";

interface Props {}

const HomeMediumRow: FC<Props> = () => {
  return (
    <div className='bg-red-500 h-[400px] text-white flex justify-center items-center'>
      Row 1
    </div>
  );
};

export default HomeMediumRow;
