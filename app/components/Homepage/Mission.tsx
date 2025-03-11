import { RightArrow } from "../SVGs/RightArrow";

const Mission = () => {
  return (
    <div className="bg-white pb-[230px] pt-[160px] flex justify-center font-DMSans relative px-6">
      <img
        className="absolute  top-5 left-[300px]"
        src="./circle.webp"
        alt=""
      />
      <div className="max-w-[1200px]  flex flex-col gap-3 items-start justify-center ">
        <div className="w-full text-[32px] text-[#1E1E1E80] font-semibold font-DarkerGrotesque flex justify-between items-center ">
          <h1>Our Mission</h1>
          <h1>Founded 2024</h1>
        </div>
        <div className="max-w-[440px] w-full flex items-start flex-col gap-3 ">
          <p className="text-2xl  text-[#1E1E1E] ">
            We are a community-driven foundation dedicated to making education
            accessible and supporting those in need. Every donation, volunteer
            effort, and shared moment makes a difference.{" "}
          </p>
          <button className="flex items-center mt-3 gap-2 py-3 px-3 rounded-[8px] border border-solid border-[#1E1E1E]  ">
            <span className="font-medium text-[#1E1E1E]">More About Us</span>{" "}
            <RightArrow />{" "}
          </button>
        </div>
        <div className="w-full mt-14 flex justify-center items-center">
          <div className="w-full flex gap-6 justify-between flex-wrap">
            {/* Refactor to add background image */}
            <img className=" " src="./kid1.webp" alt="" />
            <img className=" " src="./kid2.webp" alt="" />
            <img className=" " src="./kid3.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
