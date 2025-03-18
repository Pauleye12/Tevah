import { LinkedIn } from "../SVGs/Socials";

const Team = () => {
  return (
    <div className="w-full font-DMSans md:py-[244px] py-[100px] bg-white ">
      <div className="border border-solid flex justify-center items-center border-t-0 px-5 w-full  border-[#1E1E1E33]">
        <div className="max-w-[1200px] px-6 py-10 flex flex-col items-start gap-5 w-full ">
          <div className="flex justify-between  w-full gap-4 text-[#1E1E1E]">
            <h2 className="md:text-[32px] text-[24px] font-DarkerGrotesque font-bold">
              Our Team
            </h2>
            <p className="text-[#1E1E1E80] md:text-[32px] text-xl font-DarkerGrotesque font-semibold">
              The 4 Pillars
            </p>
          </div>
          <p className="text-xl text-[#1E1E1E] ">
            Meet the Dedicated Team Committed to Transforming Lives Through
            Education
          </p>
        </div>
      </div>
      <div className="border-b py-2 lg:py-6 border-solid flex justify-center items-center px-5 w-full border-[#1E1E1E33]">
        <div className="max-w-[1200px] w-full flex lg:flex-row flex-col justify-center gap-0 lg:gap-12 ">
          <div className="flex flex-col">
            <div className=" lg:max-w-[500px] py-4 lg:py-7 text-[#1E1E1E] w-full flex md:gap-6 gap-4 ">
              <img
                className={`min-h-[100px] max-h-[210px] aspect-210/187 rounded-lg md:w-fit object-cover `}
                src="./David.webp"
                alt=""
              />
              <div className="flex flex-col items-start gap-1 md:gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-lg font-semibold ">David Clarkson</h1>{" "}
                  <a className="hidden md:flex" href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">Founder</p>
                <p className="mt-2 leading-5 ">
                  Passionate about creating opportunities, he is dedicated to
                  making learning accessible for all.
                </p>
              </div>
            </div>
            <div className=" lg:max-w-[500px] py-4 lg:py-7 lg:border-t border-solid border-[#1E1E1E33] text-[#1E1E1E] w-full flex gap-4 md:gap-6 ">
              <img
                className={`min-h-[100px] max-h-[210px] aspect-210/187 rounded-lg md:w-fit object-cover `}
                src="./Micheal.webp"
                alt=""
              />
              <div className="flex flex-col items-start gap-1 md:gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-lg font-semibold ">Micheal Clarkson</h1>{" "}
                  <a className="hidden md:flex" href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">Co-Founder</p>
                <p className="mt-2 leading-5 ">
                  With a focus on sustainability and community growth, he works
                  to ensure every initiative creates lasting impact.
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-l-0 md:border-l-2 lg:px-10 lg:border-solid lg:border-[#1E1E1E33] flex-col">
            <div className=" lg:max-w-[500px] py-4 lg:py-7 text-[#1E1E1E] w-full flex gap-4 md:gap-6 ">
              <img
                className={`min-h-[100px] max-h-[210px] aspect-210/187 rounded-lg md:w-fit object-cover `}
                src="./carter.webp"
                alt=""
              />
              <div className="flex flex-col items-start gap-1 md:gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-lg font-semibold ">Samantha Carter</h1>{" "}
                  <a className="hidden md:flex" href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">
                  PROGRAM DIRECTOR
                </p>
                <p className="mt-2 leading-5 ">
                  Passionate about creating opportunities, he is dedicated to
                  making learning accessible for all.
                </p>
              </div>
            </div>
            <div className=" lg:max-w-[500px] py-4 lg:py-7 lg:border-t border-solid border-[#1E1E1E33]  text-[#1E1E1E] w-full flex gap-4 md:gap-6 ">
              <img
                className={`min-h-[100px] max-h-[210px] aspect-210/187 rounded-lg md:w-fit object-cover `}
                src="./sarah.webp"
                alt=""
              />
              <div className="flex flex-col items-start gap-1 md:gap-2">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-lg font-semibold ">Sarah Thompson</h1>{" "}
                  <a className="hidden md:flex" href="/">
                    <LinkedIn />
                  </a>
                </div>
                <p className="text-sm font-[900] uppercase ">
                  COMMUNITY ENGAGEMENT MANAGER
                </p>
                <p className="mt-2 leading-5 ">
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
