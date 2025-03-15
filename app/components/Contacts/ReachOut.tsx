import { useState } from "react";
import { RightArrowWhite } from "../SVGs/RightArrow";
import PhoneCall from "../SVGs/PhoneCall";

const ReachOut = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-white mt-20 px-5 pt-[100px] w-full font-DMSans text-[#1E1E1E] flex flex-col items-center justify-center">
      <div className="max-w-[750px] w-full flex flex-col items-center justify-center">
        <h1 className="text-[40px] leading-[40px] md:text-6xl md:leading-[60px] text-left md:text-center font-DarkerGrotesque font-semibold ">
          Reach Out & Be Part of the Change!
        </h1>
        <p className="text-lg md:text-2xl text-left md:text-center md:mt-5 mt-7">
          Whether You Have Questions, Suggestions, or Want to Join Our Mission,
          We're Here to Connect!
        </p>

        <div className="w-full mt-11 flex flex-col items-center justify-center gap-10">
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
          <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-10">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label htmlFor="message">Message*</label>
              <input
                className=" outline-none border-b border-[#1E1E1E] w-full"
                type="text"
                id="message"
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-2">
            <input
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="text-white accent-[#E24700] "
              type="checkbox"
            />
            <p className="leading-5">
              By ticking this box, you agree to our privacy policy and consent
              to receive marketing emails (don't worry, no spam!). You can
              unsubscribe anytime.
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <button className="bg-[#1E1E1E] rounded-lg flex justify-between items-center cursor-pointer font-medium text-white py-1 w-full md:w-[280px] px-3 pr-2 ">
              Send Message{" "}
              <span className="reachOutBtn grid place-items-center p-3 rounded-lg">
                <RightArrowWhite />
              </span>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-[100px] flex items-center justify-center md:border-t md:border-b border-solid border-t-0  border-[#1E1E1E33] py-3 ">
        <div className="max-w-[1200px] py-7 w-full flex flex-col-reverse  md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-start justify-start gap-6 text-[#1E1E1E] font-DMSans text-2xl font-semibold md:border-r border-solid border-[#1E1E1E33] pt-8 md:pt-0 border-t  md:border-t-0  pr-10 ">
            <h1>Need the personal touch? Schedule a call.</h1>
            <div className="flex items-start justify-center gap-5">
              <img src="/sarahcall.webp" alt="" />
              <div className="flex flex-col items-start justify-start gap-2">
                <h3>Sarah Thompson</h3>
                <p className="text-sm">COMMUNITY ENGAGEMENT MANAGER</p>
                <span className="bg-[#1E1E1E] grid place-items-center p-4 rounded-md">
                  <PhoneCall />
                </span>
              </div>
            </div>
          </div>
          <img className="w-full md:w-fit" src="/phone.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
