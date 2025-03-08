import School from "../SVGs/School";
import Stacks from "../SVGs/Stacks";

const Impact = () => {
  return (
    <div className="bg-[#F8F8FA] pb-[250px] w-full grid place-items-center  ">
      <div className="max-w-[1200px] w-full flex flex-col gap-3 items-start justify-center ">
        <h1 className="text-[#1E1E1E80] font-semibold text-[32px] ">
          Our Impact
        </h1>
        <p className="text-[#1E1E1E] max-w-[400px] w-full text-xl ">
          Through education and support, we empower lives.
        </p>
        <div className="mt-[88px] flex justify-between items-center gap-3 ">
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
      </div>
    </div>
  );
};

export default Impact;
