import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Close } from "../SVGs/RightArrow";
import Dropdown from "../SVGs/Dropdown";

const textVariants: Variants = {
  initial: { opacity: 0.6, y: "80%" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const GetInvoled = ({
  setGetInvolved,
}: {
  setGetInvolved: (value: boolean) => void;
}) => {
  const [dropdown, setDropdown] = useState(true);
  const [dropdownValue, setDropdownValue] = useState("Select Item");
  return (
    <div className="bg-[#1e1e1e99] w-full h-screen fixed top-0 left-0 z-50 font-DMSans flex justify-center items-end   ">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="bg-white  text-[#1E1E1E] justify-end mx-auto relative h-full  w-full max-w-[890px] hideScrollbar overflow-y-scroll rounded-t-[36px]  gap-3 "
      >
        <button
          onClick={() => setGetInvolved(false)}
          className="p-2 grid place-items-center rounded-full border border-solid bg-white z-30 border-[#5C5C5C] cursor-pointer absolute top-10 right-10"
        >
          <Close />
        </button>

        <div className="w-full rounded-t-[36px] h-[110px] checkerBg2 md:hidden"></div>
        <div className="bg-white  text-[#1E1E1E]  w-full  px-5 md:px-[50px] pb-[30px] relative flex flex-col gap-3 py-9  ">
          <svg
            width="291"
            height="356"
            viewBox="0 0 291 356"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 rounded-t-[36px] hidden md:block "
          >
            <g clip-path="url(#clip0_273_8124)">
              <path d="M89 0H0V89H89V0Z" fill="#1E1E1E" fill-opacity="0.25" />
              <path
                d="M267 0H178V89H267V0Z"
                fill="#1E1E1E"
                fill-opacity="0.25"
              />
              <path
                d="M178 267H89V356H178V267Z"
                fill="#1E1E1E"
                fill-opacity="0.25"
              />
              <path
                d="M356 267H267V356H356V267Z"
                fill="#1E1E1E"
                fill-opacity="0.25"
              />
              <path
                d="M178 89H89V178H178V89Z"
                fill="#1E1E1E"
                fill-opacity="0.25"
              />
              <path
                d="M356 89H267V178H356V89Z"
                fill="#1E1E1E"
                fill-opacity="0.25"
              />
              <path
                d="M89 178.349H0V267.349H89V178.349Z"
                fill="#1E1E1E"
                fill-opacity="0.25"
              />
              <path
                d="M267 178.349H178V267.349H267V178.349Z"
                fill="#1E1E1E"
                fill-opacity="0.25"
              />
            </g>
            <defs>
              <clipPath id="clip0_273_8124">
                <rect width="356" height="356" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-[#1E1E1E] font-DarkerGrotesque text-2xl md:text-[36px] leading-[24px] md:leading-[36px] max-w-[450px] w-full text-left font-black ">
            Be the Change – Get Involved Today!
          </h1>
          <p className="mt-2">Please fill the form below:</p>
          <div className="w-full mt-6 flex flex-col items-center justify-center gap-10">
            <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-10">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="fistName">First Name*</label>
                <input
                  className=" outline-none border-b border-[#1E1E1E] w-full"
                  type="text"
                  id="fistName"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  className=" outline-none border-b border-[#1E1E1E] w-full"
                  type="text"
                  id="lastName"
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-10">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="phoneNumber">Phone Number*</label>
                <input
                  className=" outline-none border-b border-[#1E1E1E] w-full"
                  type="number"
                  id="phoneNumber"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="email">Email*</label>
                <input
                  className=" outline-none border-b border-[#1E1E1E] w-full"
                  type="email"
                  id="email"
                />
              </div>
            </div>
          </div>
          <p className="mt-5">Preferred way to get involved</p>
          <div className="relative max-w-[208px] w-full font-Manrope">
            <button className="shadow-xl w-full cursor-pointer flex gap-2 bg-white rounded-lg  items-center px-6 py-2 ">
              {dropdownValue}{" "}
              <span className="">
                {" "}
                <Dropdown />{" "}
              </span>
            </button>
            {dropdown && (
              <div className=" text-[#333333] mt-4 flex flex-col items-start px-2 pt-3 justify-start gap-2 w-full bg-white rounded-lg shadow-xl">
                <button
                  onClick={() => setDropdownValue("Volunteer")}
                  className="px-4 cursor-pointer py-2"
                >
                  Volunteer
                </button>
                <button
                  onClick={() => setDropdownValue("Mentor")}
                  className="px-4 cursor-pointer py-2"
                >
                  Mentor
                </button>
                <button
                  onClick={() => setDropdownValue("Fundraise")}
                  className="px-4 cursor-pointer py-2"
                >
                  Fundraise
                </button>
                <button
                  onClick={() => setDropdownValue("Partner With Us")}
                  className="px-4 cursor-pointer py-2"
                >
                  Partner With Us
                </button>
              </div>
            )}
          </div>

          <button className="bg-[#1E1E1E] mt-5 text-white py-3 px-7 rounded-md blackBG w-fit cursor-pointer font-medium">
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInvoled;
