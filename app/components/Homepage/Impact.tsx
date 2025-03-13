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
          <svg
            width="270"
            height="270"
            viewBox="0 0 270 270"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M135 270C108.3 270 82.1987 262.082 59.9981 247.248C37.7974 232.414 20.4942 211.33 10.2763 186.662C0.0584932 161.994 -2.61496 134.85 2.59405 108.663C7.80305 82.4754 20.6606 58.4207 39.5406 39.5406C58.4207 20.6606 82.4754 7.80305 108.663 2.59405C134.85 -2.61496 161.994 0.0584932 186.662 10.2763C211.33 20.4942 232.414 37.7974 247.248 59.9981C262.082 82.1987 270 108.3 270 135V270H135Z"
              fill="url(#paint0_linear_273_6807)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_273_6807"
                x1="164.492"
                y1="-9.13846"
                x2="135"
                y2="386.308"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E6E6E6" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>

          <div className="orangeBG px-5 text-white py-5 rounded-[12px]">
            <Stacks />
            <div className="flex flex-col mt-5 gap-2 items-start justify-start max-w-[220px] w-full ">
              <h1 className="font-[900] text-[32px]">5000+</h1>
              <p className="text-2xl">Academic scholarships granted.</p>
            </div>
          </div>
          <svg
            width="270"
            height="270"
            viewBox="0 0 270 270"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M270 270C270 198.392 241.554 129.716 190.919 79.0812C140.284 28.4463 71.6085 0 0 0V270H270Z"
              fill="url(#paint0_linear_273_6803)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_273_6803"
                x1="135"
                y1="0"
                x2="27.4154"
                y2="411.231"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E6E6E6" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>

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
            {/* <img className="w-[180px]" src="./circle2.webp" alt="" /> */}
            <svg
              width="270"
              height="270"
              viewBox="0 0 270 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M135 270C108.3 270 82.1987 262.082 59.9981 247.248C37.7974 232.414 20.4942 211.33 10.2763 186.662C0.0584932 161.994 -2.61496 134.85 2.59405 108.663C7.80305 82.4754 20.6606 58.4207 39.5406 39.5406C58.4207 20.6606 82.4754 7.80305 108.663 2.59405C134.85 -2.61496 161.994 0.0584932 186.662 10.2763C211.33 20.4942 232.414 37.7974 247.248 59.9981C262.082 82.1987 270 108.3 270 135V270H135Z"
                fill="url(#paint0_linear_273_6807)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_273_6807"
                  x1="164.492"
                  y1="-9.13846"
                  x2="135"
                  y2="386.308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E6E6E6" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>

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
            <svg
              width="270"
              height="270"
              viewBox="0 0 270 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M270 270C270 198.392 241.554 129.716 190.919 79.0812C140.284 28.4463 71.6085 0 0 0V270H270Z"
                fill="url(#paint0_linear_273_6803)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_273_6803"
                  x1="135"
                  y1="0"
                  x2="27.4154"
                  y2="411.231"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E6E6E6" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
