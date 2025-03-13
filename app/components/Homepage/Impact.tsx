import School from "../SVGs/School";
import Stacks from "../SVGs/Stacks";

const Impact = () => {
  return (
    <div className="bg-[#F8F8FA] font-DMSans pb-[140px] md:pb-[250px] w-full grid place-items-center  ">
      <div className="max-w-[1200px] pt-6 md:pt-0 w-full flex flex-col gap-3 items-start justify-center px-7 ">
        <h1 className="text-[#1E1E1E80] font-semibold text-[32px] font-DarkerGrotesque ">
          Our Impact
        </h1>
        <p className="text-[#1E1E1E] max-w-[400px] w-full text-xl ">
          Through education and support, we empower lives.
        </p>
        <div className="mt-[88px] md:flex hidden flex-wrap justify-between items-center gap-3 ">
          <img src="./circle2.webp" alt="" />
          <div className="orangeBG px-5 text-white py-5 rounded-[12px]">
            <Stacks />
            <div className="flex flex-col mt-5 gap-2 items-start justify-start max-w-[220px] w-full ">
              <h1 className="font-[900] text-[32px]">5000+</h1>
              <p className="text-2xl">Academic scholarships granted.</p>
            </div>
          </div>
          <img src="./quarter.webp" alt="" />
          <div className="blackBG px-5 py-5 rounded-[12px]">
            <School />
            <div className="flex flex-col mt-5 gap-2 items-start justify-start max-w-[220px] w-full ">
              <h1 className="font-[900] text-[32px]">200+</h1>
              <p className="text-2xl">
                Primary and secondary schools supported.
              </p>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className="mt-[28px] md:hidden flex flex-col items-center gap-3 ">
          <div className="flex items-center gap-4 ">
            <img className="w-[180px]" src="./circle2.webp" alt="" />
            <div className="orangeBG px-5 text-white py-5 rounded-[12px]">
              <Stacks />
              <div className="flex flex-col mt-3 gap-1 items-start justify-start max-w-[220px] w-full ">
                <h1 className="font-[900] font-DarkerGrotesque text-[40px]">
                  5000+
                </h1>
                <p className="text-sm">Academic scholarships granted.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="blackBG px-5 py-5 rounded-[12px]">
              <School />
              <div className="flex flex-col mt-3 gap-1 items-start justify-start max-w-[220px] w-full ">
                <h1 className="font-[900] font-DarkerGrotesque text-[40px]">
                  200+
                </h1>
                <p className="text-sm">
                  Primary and secondary schools supported.
                </p>
              </div>
            </div>
            <img className="w-[180px]" src="./quarter.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
