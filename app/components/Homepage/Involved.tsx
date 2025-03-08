import RightArrowOrange from "../SVGs/RightArrowOrange";

const Involved = () => {
  return (
    <div className="bg-[#1E1E1E] relative px-6 pt-[50px] grid place-items-center ">
      <img className="absolute right-0 top-0 " src="./square2.webp" alt="" />

      <div className="max-w-[1100px] w-full ">
        <div className="flex flex-col items-start justify-start ">
          <h1 className="capitalize mb-3 text-[#F2F2F280] text-[32px]  text-semibold ">
            How to get involved
          </h1>
          <p className="text-[#F2F2F2] text-lg ">
            Every effort helps transform lives.
          </p>
          <p className="text-[#F2F2F2] text-lg ">
            Choose how you want to make an impact!
          </p>
        </div>
        <div className="mt-[100px] rounded-t-4xl flex pl-14  bg-[#F8F8FA] w-full relative ">
          <div className="w-[40%] py-[60px] pr-3 flex flex-col gap-6  ">
            <img
              className="absolute left-[60px] top-[30px] "
              src="./Dots.webp"
              alt=""
            />
            <div className="text-[#FF7C3F] text-[28px] font-medium flex items-center gap-6 justify-between ">
              <p className="flex items-center w-full border-b-2 px-1 py-5 border-[#C5C5C580] border-solid gap-2">
                <RightArrowOrange /> <span>Donate</span>
              </p>
              <p className="text-[24px]">01</p>
            </div>
            <div className="text-[#1E1E1E] text-[28px] font-medium flex items-center justify-between gap-6 ">
              <p className="flex items-center w-full border-b-2 px-1 py-5 border-[#C5C5C580] border-solid gap-2">
                Volunteer
              </p>
              <p className="text-[#C5C5C580] text-[24px]">02</p>
            </div>
            <div className="text-[#1E1E1E] text-[28px] font-medium flex items-center justify-between gap-6 ">
              <p className="flex items-center w-full border-b-2 px-1 py-5 border-[#C5C5C580] border-solid gap-2">
                Partner With Us
              </p>
              <p className="text-[#C5C5C580] text-[24px] ">03</p>
            </div>
            <img
              className="absolute left-[60px] bottom-[20px] "
              src="./Dots.webp"
              alt=""
            />
          </div>
          <div className="foodAidBg rounded-tr-4xl w-full min-h-full flex items-end py-3 pb-9 px-8 ">
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
              <button className="whiteBtn border-2 border-solid border-white rounded-[12px] px-4 py-3 text-[#1E1E1E] font-medium ">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involved;
