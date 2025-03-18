import { motion, type Variants } from "motion/react";

const textVariants: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

const textBoxVariants: Variants = {
  initial: { opacity: 0.6, x: -100 },
  inView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textBoxVariants2: Variants = {
  initial: { opacity: 0.6, x: 100 },
  inView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ToBeHeard = () => {
  return (
    <div className="heroBg h-[90vh] overflow-x-hidden hideScrollbar  mt-[80px] font-DMSans ">
      {/* first section */}
      <div className="w-full flex items-center justify-center pt-[72px] md:pb-[100px] pb-[30px] min-h-screen bg-white">
        <div className="max-w-[1150px] w-full px-5 flex flex-col items-start gap-10  ">
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-[#1E1E1E] text-[40px] leading-[45px] md:text-[48px] font-semibold font-DarkerGrotesque"
          >
            We Believe Every Voice Deserves To Be Heard.
          </motion.h1>
          <div className="flex py-10 beHeardBg rounded-xl md:items-center items-end justify-end h-[629px]  md:px-[54px] px-[20px] w-full">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="flex  flex-col gap-4 max-w-[410px] w-full"
            >
              <h1 className="text-[#FFFFFFBF] text-xl font-medium font-DarkerGrotesque">
                Empowering Lives, One Opportunity at a Time.
              </h1>
              <p className="md:text-xl text-white">
                Education has the power to transform lives, and we’re here to
                make sure everyone gets that chance. Through scholarships,
                school programs, and community support, we’re building a future
                where learning knows no limits.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full, h-screen bg-transparent"></div>
      {/* third section */}
      <div className="w-full py-[180px] flex items-center justify-center bg-white">
        <div className="max-w-[1200px] w-full px-6 flex flex-col items-start gap-[63px] relative text-[#1E1E1E]  ">
          {/* <img
            className=" w-[241px] md:w-fit absolute right-5 md:left-1/2 md:-translate-1/2 top-[180px] md:top-1/2  "
            src="./Vector.webp"
            alt=""
          /> */}
          <svg
            width="412"
            height="412"
            viewBox="0 0 412 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" w-[241px] md:w-fit absolute right-5 md:left-1/2 md:-translate-1/2 top-[48vw] xs:top-[80px] sm:top-[0px] md:top-[200px] lg:top-1/2  "
          >
            <path
              d="M-3.05176e-05 412L239.393 412L412 412L412 239.393L412 0L239.393 -1.50898e-05L239.393 239.393L-1.54278e-05 239.393L-3.05176e-05 412Z"
              fill="url(#paint0_linear_519_518)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_519_518"
                x1="206"
                y1="412"
                x2="206"
                y2="1.25085e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF7C3F" />
                <stop offset="1" stop-color="#E24700" />
              </linearGradient>
            </defs>
          </svg>

          <div className="w-full flex justify-start ">
            <motion.div
              variants={textBoxVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              className="flex flex-col gap-4 max-w-[100%] pr-[125px] lg:pr-0 md:max-w-[490px] w-full"
            >
              <h2 className="text-[32px] font-DarkerGrotesque font-bold ">
                Our Mission
              </h2>
              <p className="text-xl ">
                “To make education accessible and empower communities through
                scholarships, school programs, and essential support, creating
                opportunities for a brighter future."
              </p>
            </motion.div>
          </div>
          <div className="w-full mt-[22vw] lg:mt-0 flex justify-end ">
            <motion.div
              variants={textBoxVariants2}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              className="flex flex-col gap-4 md:max-w-[329px] max-w-[256px] w-full"
            >
              <h2 className="text-[32px] font-DarkerGrotesque font-bold ">
                Our Vision
              </h2>
              <p className="text-xl ">
                “A world where every child has access to quality education and
                the tools to reach their full potential."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToBeHeard;
