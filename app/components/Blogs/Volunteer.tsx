import { useState } from "react";
import { RightArrow } from "../SVGs/RightArrow";

const Volunteer = () => {
  const [getInvolved, setGetInvolved] = useState(false);
  return (
    <div className="bg-[#F8F8FA] hidden md:flex py-[132px] w-full items-center justify-center flex-col">
      <div className="w-full flex justify-center border-b border-[#1E1E1E33] border-solid px-6 pb-5 font-DMSans ">
        <div className="max-w-[1200px] w-full flex justify-between items-start gap-5">
          <h1 className="font-DarkerGrotesque w-full max-w-[100px] text-[#1E1E11] text-5xl text-start font-semibold ">
            Featured Volunteer
          </h1>
          <p className="text-[#1E1E1E80] font-DarkerGrotesque text-4xl  text-start font-semibold ">
            Selfless Personalities
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mt-7 w-full text-[#1E1E1E] flex flex-col justify-between items-center text-xl px-6 gap-5">
        <p>
          Volunteers bring our mission to life, and this month, we’re
          celebrating Emily Rodriguez for her dedication to empowering students
          through education.
        </p>
        <div className="w-full flex items-center gap-5">
          <div className="w-full flex flex-col gap-5">
            <img src="/volunteer.webp" alt="" />
            <button
              onClick={() => setGetInvolved(true)}
              className="bg-[#1E1E1E] text-white font-medium  flex justify-center py-4 px-4 items-center gap-2 cursor-pointer"
            >
              Become a Volunteer <RightArrow />{" "}
            </button>
          </div>
          <div className="w-full flex flex-col gap-5">
            <p>
              Emily has been an incredible force in our mentorship program,
              spending countless hours tutoring underprivileged students and
              helping them build confidence in their learning journey. Her
              patience, kindness, and commitment have made a lasting impact on
              young minds.
            </p>
            <p>
              When asked why she volunteers, Emily shared, "Education changed my
              life, and I want to give others the same opportunity. Seeing a
              student’s face light up when they finally understand
              something—that’s why I do this." Her passion for teaching and
              mentoring has inspired both students and fellow volunteers alike.
            </p>
            <p>
              Over the past year, Emily has mentored more than 50 students,
              helping them improve their grades and self-esteem. She also played
              a key role in organising our annual book drive, ensuring hundreds
              of children received essential learning materials. Her dedication
              is a reminder that even small actions can create a lasting impact.
            </p>
            <p>
              Inspired by Emily’s story? You can make a difference too! Sign up
              as a volunteer and be part of something bigger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
