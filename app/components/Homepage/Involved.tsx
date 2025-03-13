import GetInvoled from "../PopUps/GetInvoled";
import { PlusIcon } from "../SVGs/RightArrow";
import RightArrowOrange from "../SVGs/RightArrowOrange";
import { useState } from "react";
import { motion, type Variants } from "motion/react";

const squareVariants: Variants = {
  initial: { rotateY: 0, fill: "#FF7C3F" },
  animate: {
    rotateY: 180,
    fill: "#FFF",
    transition: {
      duration: 1,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
    },
  },
};
const Involved = () => {
  const [getInvolved, setGetInvolved] = useState(false);
  return (
    <div className="bg-[#1E1E1E] font-DMSans relative  pt-[50px] grid place-items-center ">
      {/* <img
        className="absolute w-[91px] md:w-fit right-0 top-0 "
        src="./square2.webp"
        alt=""
      /> */}
      <svg
        width="216"
        height="216"
        viewBox="0 0 216 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[91px] md:w-fit right-0 top-0 "
      >
        <g clip-path="url(#clip0_449_2662)">
          <g>
            <path
              d="M-7.62939e-06 108H54L108 54V-7.62939e-06H54L-7.62939e-06 54V108Z"
              fill="#FFB695"
            />
            <motion.path
              variants={squareVariants}
              initial="initial"
              animate="animate"
              d="M-3.8147e-06 108H54V54H-3.8147e-06V108Z"
              fill="#FF7C3F"
            />
          </g>

          <g>
            {" "}
            <path
              d="M108 108H162L216 54V-7.62939e-06H162L108 54V108Z"
              fill="#FFB695"
            />
            <motion.path
              variants={squareVariants}
              initial="initial"
              animate="animate"
              d="M108 108H162V54H108V108Z"
              fill="#FF7C3F"
            />
          </g>

          <g>
            <path
              d="M-7.62939e-06 215.998H54L108 161.998V107.998H54L-7.62939e-06 161.998V215.998Z"
              fill="#FFB695"
            />
            <motion.path
              variants={squareVariants}
              initial="initial"
              animate="animate"
              d="M-3.8147e-06 215.998H54V161.998H-3.8147e-06V215.998Z"
              fill="#FF7C3F"
            />
          </g>
          <g>
            {" "}
            <path
              d="M108 215.998H162L216 161.998V107.998H162L108 161.998V215.998Z"
              fill="#FFB695"
            />
            <motion.path
              variants={squareVariants}
              initial="initial"
              animate="animate"
              d="M108 215.998H162V161.998H108V215.998Z"
              fill="#FF7C3F"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_449_2662">
            <rect
              width="216"
              height="216"
              fill="white"
              transform="matrix(-1 0 0 -1 216 216)"
            />
          </clipPath>
        </defs>
      </svg>

      <img
        className="absolute  left-[30px] top-[30px] "
        src="./Dots.webp"
        alt=""
      />

      <div className="max-w-[1100px]  mt-10 md:mt-0 w-full ">
        <div className="flex flex-col px-6 items-start justify-start ">
          <h1 className="capitalize mb-3  text-[#F2F2F280] text-[32px]  text-semibold font-DarkerGrotesque ">
            How to get involved
          </h1>
          <p className="text-[#F2F2F2] text-lg ">
            Every effort helps transform lives.
          </p>
          <p className="text-[#F2F2F2] text-lg ">
            Choose how you want to make an impact!
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0.7, y: 130 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-[100px] md:rounded-t-4xl flex px-5 md:px-0 md:pl-14  bg-[#F8F8FA] w-full relative "
        >
          <div className="md:w-[40%] w-full md:py-[60px] py-[30px] pr-3 flex flex-col gap-6  ">
            <img
              className="absolute hidden md:flex  left-[60px] top-[30px] "
              src="./Dots.webp"
              alt=""
            />
            <div className=" w-full  text-xl md:text-[28px] font-semibold md:font-medium flex items-center gap-6 justify-between border-b-2 border-t-2 border-[#C5C5C580] border-solid md:border-none ">
              <p className="flex items-center w-full md:border-b-2 md:border-[#C5C5C580] md:border-solid px-1 py-5  gap-2">
                <span className="hidden md:flex">
                  <RightArrowOrange />
                </span>{" "}
                <span className="flex items-center justify-center border border-solid border-[#C5C5C5] p-3 mr-2 bg-[#1E1E1E] rounded-full md:hidden">
                  <PlusIcon />
                </span>
                <span className="text-[#1E1E1E] md:text-[#FF7C3F]">Donate</span>
              </p>
              <p className="text-[24px] text-[#C5C5C580]">01</p>
            </div>
            <div className="text-[#1E1E1E] text-xl md:text-[28px] font-semibold md:font-medium flex items-center justify-between gap-6 border-b-2 border-[#C5C5C580] border-solid md:border-none ">
              <p className="flex items-center w-full md:border-b-2 md:border-[#C5C5C580] md:border-solid px-1 py-5  gap-2">
                <span className="flex items-center justify-center border border-solid border-[#C5C5C5] p-3 mr-2 bg-[#1E1E1E] rounded-full md:hidden">
                  <PlusIcon />
                </span>
                Volunteer
              </p>
              <p className="text-[#C5C5C580] text-[24px]">02</p>
            </div>
            <div className="text-[#1E1E1E] text-xl md:text-[28px] font-semibold md:font-medium flex items-center justify-between gap-6 border-b-2 border-[#C5C5C580] border-solid md:border-none ">
              <p className="flex items-center w-full md:border-b-2 md:border-[#C5C5C580] md:border-solid px-1 py-5  gap-2">
                <span className="flex items-center justify-center border border-solid border-[#C5C5C5] p-3 mr-2 bg-[#1E1E1E] rounded-full md:hidden">
                  <PlusIcon />
                </span>
                Partner With Us
              </p>
              <p className="text-[#C5C5C580] text-[24px] ">03</p>
            </div>
            <img
              className="absolute hidden md:flex  left-[60px] bottom-[20px] "
              src="./Dots.webp"
              alt=""
            />
          </div>
          <div className="foodAidBg hidden md:flex rounded-tr-4xl w-full min-h-full items-end py-3 pb-9 px-8 ">
            <div className="flex items-end  w-full justify-between">
              <div className="text-white max-w-[400px] w-full flex flex-col gap-6 ">
                <h2 className="text-lg font-semibold">
                  Give Your Time, Make a Difference
                </h2>
                <p>
                  Your time and skills can create real change! Whether you're
                  mentoring students, helping with events, or assisting with
                  community programs, your efforts bring hope and opportunity to
                  those who need it most. Volunteering is more than just giving
                  back—it’s about creating meaningful connections and leaving a
                  lasting impact.
                </p>
              </div>
              <button
                onClick={() => setGetInvolved(true)}
                className="whiteBtn border-2 cursor-pointer border-solid border-white rounded-[12px] px-4 py-3 text-[#1E1E1E] font-medium "
              >
                Get Involved
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      {getInvolved && <GetInvoled setGetInvolved={setGetInvolved} />}
    </div>
  );
};

export default Involved;
