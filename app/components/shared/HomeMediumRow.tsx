import { FC, Fragment } from "react";

interface Props {}

const HomeMediumRow: FC<Props> = () => {
  return (
    <Fragment>
      <div className='bg-blue-500 h-[700px] text-white flex justify-center items-center'>
        Row 3
      </div>
    </Fragment>
  );
};

export default HomeMediumRow;
