import { useState } from "react";
import { RightArrow } from "../SVGs/RightArrow";
import GetInvoled from "../PopUps/GetInvoled";

const Partners = () => {
  const [getInvolved, setGetInvolved] = useState(false);
  return (
    <div className="bg-[#F8F8FA] font-DMSans md:pt-[88px] pt-[40px] px-7 md:pb-10 pb-5 w-full grid place-items-center  ">
      <div className="max-w-[1200px] w-full flex flex-col md:gap-20 gap-12 items-start justify-center ">
        <div className="flex justify-between w-full items-center ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-[#1E1E1E80] font-semibold text-[32px] font-DarkerGrotesque ">
              Our Partners
            </h1>
            <p className="text-[#1E1E1E] max-w-[400px] w-full text-xl ">
              Our journey has been funded by these amazing companies and
              individuals
            </p>
          </div>
          <button
            onClick={() => setGetInvolved(true)}
            className="bg-white hidden border md:flex items-center gap-2 border-solid border-[#1E1E1E] rounded-lg cursor-pointer font-medium text-[#1E1E1E] py-4 px-3 "
          >
            Get Involved <RightArrow />
          </button>
        </div>
        <div className="flex w-full gap-4  justify-between flex-wrap ">
          <img className=" w-[100px] md:w-[210px]" src="/change.webp" alt="" />
          <img className=" w-[100px] md:w-[210px]" src="/change.webp" alt="" />
          <img className=" w-[100px] md:w-[210px]" src="/change.webp" alt="" />
          <img className=" w-[100px] md:w-[210px]" src="/change.webp" alt="" />
          {/* <img className=" w-[85px] md:w-[210px]" src="/change.webp" alt="" /> */}
        </div>

        <button
          onClick={() => setGetInvolved(true)}
          className="bg-white md:hidden border flex items-center gap-2 border-solid border-[#1E1E1E] rounded-lg cursor-pointer font-medium text-[#1E1E1E] py-4 px-3 "
        >
          Get Involved <RightArrow />
        </button>
      </div>
      {getInvolved && <GetInvoled setGetInvolved={setGetInvolved} />}
    </div>
  );
};

export default Partners;
