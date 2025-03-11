import { Books, Mentorship, Scholarship } from "../SVGs/ProgramSVGs";
import { RightArrow } from "../SVGs/RightArrow";
import ProgramCard from "./ProgramCard";
import { useRef, useState, useEffect } from "react";

const programDets = [
  {
    icon: <Scholarship />,
    title: "Scholarship & Financial Aid Program",
    description:
      "We provide scholarships, tuition assistance, and school supplies to ensure financial barriers don't limit a student's potential.",
    button: "Donate to Support a Student",
  },
  {
    icon: <Mentorship />,
    title: "Mentorship & Career Guidance",
    description:
      "Students connect with experienced mentors for academic support, career advice, and essential life skills to help them navigate their future.",
    button: "Become a Mentor",
  },
  {
    icon: <Books />,
    title: "Books & Learning Resources Drive",
    description:
      "We provide books, learning materials, and organize reading sessions to promote literacy and education in underserved communities.",
    button: "Donate Books",
  },
  {
    icon: <Scholarship />,
    title: "Scholarship & Financial Aid Program",
    description:
      "We provide scholarships, tuition assistance, and school supplies to ensure financial barriers don't limit a student's potential.",
    button: "Donate to Support a Student",
  },
  {
    icon: <Mentorship />,
    title: "Mentorship & Career Guidance",
    description:
      "Students connect with experienced mentors for academic support, career advice, and essential life skills to help them navigate their future.",
    button: "Become a Mentor",
  },
  {
    icon: <Books />,
    title: "Books & Learning Resources Drive",
    description:
      "We provide books, learning materials, and organize reading sessions to promote literacy and education in underserved communities.",
    button: "Donate Books",
  },
];

const KeyProgram = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
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

  return (
    <div className="bg-[#F8F8FA] w-full min-h-screen py-[52px] flex justify-center flex-col items-center gap-9 ">
      <div className="w-full max-w-[1100px] px-7 flex justify-start ">
        <h1 className="font-DarkerGrotesque text-[48px] font-semibold text-[#1E1E1E] max-w-[280px] w-full ">
          Key Programs & Initiatives
        </h1>
      </div>
      <div
        className="relative w-full overflow-x-scroll hideScrollbar"
        ref={scrollRef}
      >
        <div className="flex pl-[150px] pr-10 min-w-max gap-10">
          {programDets.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1100px] px-7 mt-4 flex justify-end">
        <div className="flex gap-6 items-center">
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
  );
};

export default KeyProgram;
