import BlogCard from "../BlogCard";
import { useRef, useState, useEffect } from "react";
import { RightArrow } from "../SVGs/RightArrow";
const blogDets = [
  {
    img: "./learn1.webp",
    blogId: "1",
    title: "Education for All Summit",
    location: "Los Angeles, CA",
    date: "April 10, 2025",
    description:
      "Join educators, changemakers, and supporters as we discuss innovative solutions for accessible education worldwide.",
    button: "Register Now",
    category: "Upcoming",
  },
  {
    img: "./strength.webp",
    blogId: "2",
    title: "Community Outreach & School Supply Drive",
    location: "Chicago, IL",
    date: "March 24, 2025",
    description:
      "Help us distribute school supplies, mentor students, and support underprivileged schools in our local communities.",
    button: "Volunteer Today",
    category: "Upcoming",
  },
  {
    img: "./change.webp",
    blogId: "3",
    title: "Annual Charity Gala",
    location: "New York City",
    date: "January 10, 2025",
    description:
      "An elegant evening of inspiration, live entertainment, and fundraising to support our scholarship and education programs.",
    button: "Read Article",
    category: "Fufilled",
  },
  {
    img: "./run.webp",
    blogId: "4",
    title: "Run for Education – 5K Charity Run",
    location: "Miami, FL",
    date: "December 10, 2024",
    description:
      "Lace up your running shoes and join us for a 5K run to raise funds for scholarships and school programs. Every step makes a difference!",
    button: "Read Article",
    category: "Fufilled",
  },
];
const UpTo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
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
    <div className="w-full font-DMSans md:bg-[#FFFFFF] bg-[#F8F8FA] md:pb-[250px] pb-[60px] flex items-center flex-col md:gap-20 gap-12 ">
      <div className="flex flex-col px-7 md:pt-[50px] pt-[20px] max-w-[1100px] w-full items-start justify-start ">
        <h1 className="capitalize mb-3 text-[#1E1E1E80] text-[32px]  text-semibold font-DarkerGrotesque ">
          What We’ve Been Up To
        </h1>
        <p className="text-[#1E1E1E] text-lg ">
          From fundraisers to community outreach.
        </p>
        <p className="text-[#1E1E1E] text-lg ">
          We organize events that make a difference!
        </p>
      </div>
      <div
        ref={scrollRef}
        className="  relative w-full overflow-x-scroll hideScrollbar "
      >
        <div className="flex pl-[40px] md:pl-[150px] pr-10 min-w-max gap-10">
          {blogDets.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
      <div className="w-full md:hidden max-w-[1100px] px-7 mt-4 flex justify-end">
        <div className="flex gap-6 justify-between items-center">
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

export default UpTo;
