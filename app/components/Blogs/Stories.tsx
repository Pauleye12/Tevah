import React from "react";
import { motion } from "motion/react";

const scrollLeft = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const Stories = () => {
  return (
    <div className='py-[150px] pb-[180px] overflow-hidden  font-DMSans  mt-[80px] bg-[#1E1E1E] relative flex flex-col  justify-center items-center "'>
      <div className="w-full max-w-[1200px] flex justify-start ">
        <h1 className="max-w-[900px] w-full font-DarkerGrotesque text-white text-[56px] leading-[56px] font-semibold ">
          Stories of Change, Insights and Inspirational Reports.
        </h1>
      </div>
      <div className="w-full absolute left-0 bottom-0">
        <motion.div
          variants={scrollLeft}
          initial="initial"
          animate="animate"
          className=" relative  "
        >
          <div className="bg-transparent flex gap-12 items-center px-4 min-w-max w-full ">
            {num.map((item) => (
              <div className="bg-white w-[36px] h-[57px]   "></div>
            ))}
          </div>
          <div className="bg-transparent  absolute top-0 left-full flex gap-12 items-center px-4 min-w-max w-full ">
            {num.map((item) => (
              <div className="bg-white w-[36px] h-[57px]   "></div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;
