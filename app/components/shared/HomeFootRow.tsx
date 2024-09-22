import { FC, Fragment } from "react";

interface Props {}

const HomeFootRow: FC<Props> = () => {
  return (
    <Fragment>
      <div className='bg-yellow-500 h-[200px] text-white flex justify-center items-center'>
        Row 1
      </div>
    </Fragment>
  );
};

export default HomeFootRow;
