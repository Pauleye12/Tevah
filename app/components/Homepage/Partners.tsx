import { useState, useEffect, useRef } from "react";
import { RightArrow } from "../SVGs/RightArrow";
import GetInvoled from "../PopUps/GetInvoled";

import { AnimatePresence, motion } from "motion/react";

const content = [
  <p key={1} className="">
    Wanna Partner
  </p>,

  <p key={2} className="underline ">
    Get Involved
  </p>,
  // <p key={3} className="">
  //   {" "}
  // </p>,
];

const PWrapper = () => {
  const [index, setIndex] = useState(0);
  const Component = content[index];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="absolute top-1/2 -translate-1/2 left-1/2   "
        key={index}
        initial={{ x: "130%" }}
        animate={{ x: 0 }}
        exit={{ x: "-130%" }}
        transition={{ duration: 0.45, ease: "linear" }}
      >
        {Component}
      </motion.div>
    </AnimatePresence>
  );
};

const Partners = () => {
  const [getInvolved, setGetInvolved] = useState(false);
  // const scrollRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const scrollItems = scrollRef.current?.children;
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     if (scrollItems) {
  //       scrollItems[index].scrollIntoView({ behavior: "smooth" });
  //       index = (index + 1) % scrollItems.length;
  //     }
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, []);

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
          <div className="w-[100px] md:w-[210px] h-[100px] md:h-[210px] bg-[#E6E6E6]"></div>
          <div className="w-[100px] md:w-[210px] h-[100px] md:h-[210px] bg-[#E6E6E6]"></div>
          <div className="w-[100px] md:w-[210px] h-[100px] md:h-[210px] bg-[#E6E6E6]"></div>
          <div className="w-[100px] md:w-[210px] h-[100px] md:h-[210px] bg-[#E6E6E6]"></div>
          <div className="w-[100px] relative overflow-hidden md:w-[210px] h-[100px] text-[#1E1E1E] font-medium text-xl md:h-[210px] flex  bg-white">
            <PWrapper />
          </div>
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
