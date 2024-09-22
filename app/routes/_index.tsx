import type { MetaFunction } from "@remix-run/node";
import HomeFootRow from "~/components/shared/HomeFootRow";
import HomeMediumRow from "~/components/shared/HomeMediumRow";
import HomeUpperRow from "~/components/shared/HomeUpperRow";

export const meta: MetaFunction = () => {
  return [
    { title: "Home Page" },
    { name: "Experimental Typographic Layout", content: "Love Typography!" },
  ];
};

export default function Index() {
  return (
    <div className=''>
      <div className='w-full grid grid-rows-[auto,auto,auto] gap-0 bg-white'>
        <HomeMediumRow />
        <HomeFootRow />
      </div>
    </div>
  );
}
