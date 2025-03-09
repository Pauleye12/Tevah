const Values = () => {
  return (
    <div className="bg-[#1E1E1E] font-DMSans pt-[80px] flex justify-center items-center ">
      <div className="max-w-[1200px] w-full px-8 flex flex-col items-start gap-[100px] relative text-white  ">
        <div className="w-[325px] flex flex-col gap-4 text-white justify-start ">
          <h1 className="text-[32px] font-DarkerGrotesque font-bold  ">
            Our Values
          </h1>
          <p className="text-xl ">
            Our foundations core beliefs that drive our mission.
          </p>
        </div>
        <div className="w-full flex justify-center gap-4 items-end ">
          <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardWhite h-[346px] text-[#1E1E1E]">
            <h1 className="text-xl font-medium ">Accessibility</h1>
            <img className="w-[124px]" src="./3dCross.webp" alt="" />
            <p>
              Education should be available to all, regardless of background.
            </p>
          </div>
          <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardOrange h-[409px] text-white ">
            <h1 className="text-xl font-medium ">Compassion</h1>
            <img className="w-[124px]" src="./3dPlus.webp" alt="" />
            <p>
              Every initiative is driven by love, care, and a genuine desire to
              help.
            </p>
          </div>
          <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardWhite h-[464px] text-[#1E1E1E]">
            <h1 className="text-xl font-medium ">Empowerment</h1>
            <img className="w-[124px]" src="./3dArrow.webp" alt="" />
            <p>
              Knowledge is the key to breaking cycles of poverty and creating
              lasting change.
            </p>
          </div>
          <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardOrange h-[519px] text-white ">
            <h1 className="text-xl font-medium ">Innovation</h1>
            <img className="w-[124px]" src="./3dBlock.webp" alt="" />
            <p>
              We seek creative solutions to challenges in education and
              community development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
