import { useState } from "react";
import Donate from "../PopUps/Donate";
const Initiative = () => {
  const [donate, setDonate] = useState(false);
  return (
    <div className="w-full min-h-screen py-[100px] font-DMSans  mt-[80px]  initiativeBg relative flex justify-center items-center ">
      <div className="w-full max-w-[1200px] flex justify-start ">
        <div className="max-w-[763px] w-full flex flex-col gap-7 items-start ">
          <h1 className="text-[#1E1E1E] font-DarkerGrotesque  text-[48px] font-semibold leading-[50px] ">
            Programs & Initiatives – Changing Lives Through Education &
            Empowerment
          </h1>
          <p className="text-[#1E1E1E] max-w-[700px] w-full font-DMSans text-2xl ">
            Our programs and initiatives focus on providing resources,
            mentorship, and opportunities to underserved communities, ensuring
            that every child and young adult has the support they need to
            succeed.
          </p>
          <button
            onClick={() => setDonate(true)}
            className="mt-4 w-fit btn-link cursor-pointer"
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
