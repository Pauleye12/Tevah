import { useState } from "react";
import Donate from "../PopUps/Donate";
const Initiative = () => {
  const [donate, setDonate] = useState(false);
  return (
    <div className="w-full bg-white min-h-screen pt-16  md:pt-[100px] md:pb-[100px] font-DMSans  mt-[80px]  initiativeBg relative flex justify-center px-5 md:items-center ">
      <img
        src="/circle.webp"
        alt=""
        className=" w-[184px] aspect-square md:hidden absolute top-8 right-0"
      />
      <div className="w-full max-w-[1200px] flex justify-start ">
        <div className="max-w-[763px] w-full flex flex-col gap-7 items-start ">
          <h1 className="text-[#1E1E1E] font-DarkerGrotesque text-[40px] md:text-[48px] font-semibold md:leading-[50px] leading-[40px] ">
            Programs & Initiatives – Changing Lives Through Education &
            Empowerment
          </h1>
          <p className="text-[#1E1E1E] max-w-[700px] w-full font-DMSans text-xl md:text-2xl ">
            Our programs and initiatives focus on providing resources,
            mentorship, and opportunities to underserved communities, ensuring
            that every child and young adult has the support they need to
            succeed.
          </p>
          <button
            onClick={() => setDonate(true)}
            className="mt-5 w-fit btn-link cursor-pointer"
          >
            Donate Now
          </button>
        </div>
      </div>
      {donate && <Donate setDonate={setDonate} />}
    </div>
  );
};

export default Initiative;
