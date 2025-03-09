import { LinkedIn } from "../SVGs/Socials";

const Team = () => {
  return (
    <div className="w-full py-[244px] bg-white ">
      <div className="border border-solid flex justify-center items-center px-8 w-full  border-[#1E1E1E33]">
        <div className="max-w-[1200px] py-10 flex justify-between items-start gap-5 w-full ">
          <div className="flex flex-col max-w-[325px] w-full gap-4 text-[#1E1E1E]">
            <h2 className="text-[32px] font-bold">Our Team</h2>
            <p className="text-xl">
              Meet the Dedicated Team Committed to Transforming Lives Through
              Education
            </p>
          </div>
          <p className="text-[#1E1E1E80] text-[32px] font-semibold">
            The 4 Pillars
          </p>
        </div>
      </div>
      <div className="border-b py-6 border-solid flex justify-center items-center px-8 w-full border-[#1E1E1E33]">
        <div className="max-w-[1200px] w-full flex justify-center gap-12 ">
          <div className="flex flex-col">
            <div className=" max-w-[500px] py-7 text-[#1E1E1E] w-full flex gap-6 ">
              <img src="./David.webp" alt="" />
              <div className="flex flex-col items-start gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-xl font-semibold ">David Clarkson</h1>{" "}
                  <a href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">Founder</p>
                <p className="mt-2">
                  Passionate about creating opportunities, he is dedicated to
                  making learning accessible for all.
                </p>
              </div>
            </div>
            <div className=" max-w-[500px] py-7 border-t border-solid border-[#1E1E1E33] text-[#1E1E1E] w-full flex gap-6 ">
              <img src="./Micheal.webp" alt="" />
              <div className="flex flex-col items-start gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-xl font-semibold ">Micheal Clarkson</h1>{" "}
                  <a href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">Co-Founder</p>
                <p className="mt-2">
                  With a focus on sustainability and community growth, he works
                  to ensure every initiative creates lasting impact.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l-2 px-10 border-solid border-[#1E1E1E33] flex-col">
            <div className=" max-w-[500px] py-7 text-[#1E1E1E] w-full flex gap-6 ">
              <img src="./carter.webp" alt="" />
              <div className="flex flex-col items-start gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-xl font-semibold ">Samantha Carter</h1>{" "}
                  <a href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">
                  PROGRAM DIRECTOR
                </p>
                <p className="mt-2">
                  Passionate about creating opportunities, he is dedicated to
                  making learning accessible for all.
                </p>
              </div>
            </div>
            <div className=" max-w-[500px] py-7 border-t border-solid border-[#1E1E1E33]  text-[#1E1E1E] w-full flex gap-6 ">
              <img src="./sarah.webp" alt="" />
              <div className="flex flex-col items-start gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-xl font-semibold ">Sarah Thompson</h1>{" "}
                  <a href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">
                  COMMUNITY ENGAGEMENT MANAGER
                </p>
                <p className="mt-2">
                  With a focus on sustainability and community growth, he works
                  to ensure every initiative creates lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
