import { RightArrow } from "../SVGs/RightArrow";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

const Mission = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener("scroll", handleScroll);
    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imgWrapperVariants = {
    initial: { opacity: 1 },
    inView: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut", staggerChildren: 0.3 },
    },
  };
  const imgVariants = {
    initial: { opacity: 0.6, y: 100 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white pb-[110px] md:pb-[230px] md:pt-[160px] pt-[100px] flex justify-center  font-DMSans relative px-7">
      <img
        className=" absolute md:top-5 top-[210px] md:left-[300px] left-[260px] w-[184px] transition-all duration-2000 animate-pulse md:w-fit  "
        src="./circle.webp"
        alt=""
      />

      <div className="max-w-[1200px]  flex flex-col gap-3 items-start justify-center ">
        <div className="w-full text-xl md:text-[32px] text-[#1E1E1E80] font-semibold font-DarkerGrotesque flex justify-between items-center ">
          <h1>Our Mission</h1>
          <h1>Founded 2024</h1>
        </div>
        <div className="md:max-w-[440px] max-w-[250px] w-full flex items-start flex-col gap-3 ">
          <p className="md:text-2xl  text-[#1E1E1E] ">
            We are a community-driven foundation dedicated to making education
            accessible and supporting those in need. Every donation, volunteer
            effort, and shared moment makes a difference.{" "}
          </p>
          <button className="flex items-center mt-3 gap-2 py-3 px-3 rounded-[8px] border border-solid border-[#1E1E1E]  ">
            <span className="font-medium text-[#1E1E1E]">More About Us</span>{" "}
            <RightArrow />{" "}
          </button>
        </div>
        <div
          ref={scrollRef}
          className="w-full mt-14 flex overflow-x-scroll hideScrollbar justify-center items-center"
        >
          <motion.div
            variants={imgWrapperVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true }}
            className="w-full flex gap-6 "
          >
            {/* Refactor to add background image */}
            <motion.img
              variants={imgVariants}
              viewport={{ once: true }}
              className=" w-[239px] md:w-fit "
              src="./kid1.webp"
              alt=""
            />
            <motion.img
              variants={imgVariants}
              viewport={{ once: true }}
              className=" w-[239px] md:w-fit "
              src="./kid2.webp"
              alt=""
            />
            <motion.img
              variants={imgVariants}
              viewport={{ once: true }}
              className=" w-[239px] md:w-fit "
              src="./kid3.webp"
              alt=""
            />
          </motion.div>
        </div>
        <div className="w-full md:hidden max-w-[1100px] px-7 mt-4 flex justify-center">
          <div className="flex w-full gap-6 justify-between items-center">
            <button
              className={`rotate-180 rounded-full cursor-pointer border border-solid border-[#1E1E1E] p-2 ${
                scrollPosition === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleScrollLeft}
              disabled={scrollPosition === 0}
            >
              <RightArrow />
            </button>
            <button
              className={`rounded-full cursor-pointer border border-solid border-[#1E1E1E] p-2 ${
                (scrollRef.current &&
                  scrollRef.current?.scrollWidth - scrollPosition <=
                    scrollRef.current?.clientWidth) as boolean
              }`}
              onClick={handleScrollRight}
              disabled={
                (scrollRef.current &&
                  scrollRef.current?.scrollWidth - scrollPosition <=
                    scrollRef.current?.clientWidth) as boolean
              }
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
