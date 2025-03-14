import { motion, type Variants } from "motion/react";

const svgVariants: Variants = {
  initial: { rotateZ: 0, x: 0 },
  onHover: {
    rotateZ: -20,
    x: 20,

    transition: { duration: 1.5, ease: "easeOut", bounce: 0.8, type: "spring" },
  },
};
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
        <div className="  relative w-full overflow-x-scroll hideScrollbar ">
          <div className="w-full flex gap-4 min-w-max items-end ">
            <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardWhite w-[270px] h-[346px] text-[#1E1E1E]">
              <h1 className="text-xl font-medium ">Accessibility</h1>
              {/* <img className="w-[124px]" src="./3dCross.webp" alt="" /> */}
              <motion.svg
                variants={svgVariants}
                whileHover="onHover"
                width="124"
                height="124"
                viewBox="0 0 124 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.7924 10.2695L29.7791 26.2829L26.2761 29.771L2.48047 38.0021L21.9807 18.4858L45.7924 10.2695Z"
                  fill="#E24700"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M102.019 10.2695L86.0048 26.2829L73.8975 38.3766L66.1152 30.5931L78.2077 18.4858L102.019 10.2695Z"
                  fill="#E24700"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.4018 57.8972L30.5814 66.1035L2.48047 38.0026L26.2761 29.7715L54.4018 57.8972Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.4018 57.8965L26.2761 85.9974L2.48047 94.2285L30.5689 66.1152L30.5814 66.1028L54.4018 57.8965Z"
                  fill="#E24700"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.7924 105.514L21.9807 113.731L2.48047 94.2292L26.2761 85.998L45.7924 105.514Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M93.4139 57.8917L121.52 85.9976L102.02 105.514L94.2212 97.7168L73.8976 77.392L57.8842 93.4066L45.7918 105.514L26.2754 85.9976L54.3974 57.8917L26.2754 29.771L29.7784 26.2829L45.7918 10.2695L73.8976 38.3766L86.0049 26.2829L102.02 10.2695L121.52 29.771L93.4139 57.8917Z"
                  fill="#FF7C3F"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M102.02 105.515L78.2084 113.731L57.8848 93.4072L73.8981 77.3926L94.2217 97.7174L102.02 105.515Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </motion.svg>

              <p>
                Education should be available to all, regardless of background.
              </p>
            </div>
            <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardOrange w-[270px] h-[409px] text-white ">
              <h1 className="text-xl font-medium ">Compassion</h1>
              {/* <img className="w-[124px]" src="./3dPlus.webp" alt="" /> */}
              <motion.svg
                variants={svgVariants}
                whileHover="onHover"
                width="124"
                height="124"
                viewBox="0 0 124 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M117.943 43.3142V64.9447H78.3488V104.539H56.738V64.9447H17.125V43.3142H56.738V3.71973H78.3488V43.3142H117.943Z"
                  stroke="#1E1E1E"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.7379 3.71973V43.3142H45.6523V19.4603C46.7361 18.0392 56.7379 3.71973 56.7379 3.71973Z"
                  fill="white"
                  stroke="#1E1E1E"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.7367 64.9453V104.54L45.6511 120.28V80.6859H6.05664L17.1236 64.9453H56.7367Z"
                  fill="white"
                  stroke="#1E1E1E"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M78.3487 104.539C78.3487 104.539 68.3468 119.4 67.2631 120.28H45.6523L56.7379 104.539H78.3487Z"
                  fill="white"
                  stroke="#1E1E1E"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M117.942 64.9453L106.857 80.6859H78.3477V64.9453H117.942Z"
                  fill="white"
                  stroke="#1E1E1E"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.1236 43.3145V64.945L6.05664 80.6856V59.055L17.1236 43.3145Z"
                  fill="white"
                  stroke="#1E1E1E"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.7379 64.9453L45.6523 80.6859"
                  stroke="#1E1E1E"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </motion.svg>

              <p>
                Every initiative is driven by love, care, and a genuine desire
                to help.
              </p>
            </div>
            <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardWhite w-[270px] h-[464px] text-[#1E1E1E]">
              <h1 className="text-xl font-medium ">Empowerment</h1>
              {/* <img className="w-[124px]" src="./3dArrow.webp" alt="" /> */}

              <motion.svg
                variants={svgVariants}
                whileHover="onHover"
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_519_881)">
                  <path
                    d="M37.6172 -0.000155805L30.7859 15.4486L27.9184 21.9148L7.64844 31.4023L17.3597 9.49984L37.6172 -0.000155805Z"
                    fill="#E24700"
                  />
                  <path
                    d="M37.6167 -4.23946e-07L117.353 35.3062L111.674 48.1325L81.8342 115.5L68.4205 109.564L59.9192 105.801L85.7267 47.5212L27.918 21.915L30.7855 15.4487L37.6167 -4.23946e-07Z"
                    fill="#FF7C3F"
                  />
                  <path
                    d="M85.7259 47.5216L59.9184 105.802L39.6621 115.289L65.4684 57.0103L85.7259 47.5216Z"
                    fill="#E24700"
                  />
                  <path
                    d="M27.9184 21.9148L85.7272 47.521L65.4697 57.0098L7.64844 31.4023L27.9184 21.9148Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M59.9184 105.801L68.4196 109.564L81.8334 115.5L61.5771 125L39.6621 115.289L59.9184 105.801Z"
                    fill="#1E1E1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_519_881">
                    <rect
                      width="125"
                      height="125"
                      fill="white"
                      transform="translate(0 125) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </motion.svg>

              <p>
                Knowledge is the key to breaking cycles of poverty and creating
                lasting change.
              </p>
            </div>
            <div className=" px-7 pt-7 pb-[53px] flex flex-col justify-between gap-4 valueCardOrange w-[270px] h-[519px] text-white ">
              <h1 className="text-xl font-medium ">Innovation</h1>
              {/* <img className="w-[124px]" src="./3dBlock.webp" alt="" /> */}
              <motion.svg
                variants={svgVariants}
                whileHover="onHover"
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M62.7425 61.2488L62.5663 121.25L12.7812 92.5L12.9425 32.5L62.7425 61.2488Z"
                  stroke="#111111"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M112.219 32.5L112.058 92.5L62.5664 121.25L62.7427 61.2488L112.219 32.5Z"
                  fill="white"
                  stroke="#111111"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M112.22 32.5L62.7434 61.2488L12.9434 32.5L62.4346 3.75L112.22 32.5Z"
                  stroke="#111111"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </motion.svg>

              <p>
                We seek creative solutions to challenges in education and
                community development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
