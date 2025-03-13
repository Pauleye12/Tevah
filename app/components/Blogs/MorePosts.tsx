import React from "react";
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
    button: "Read Article",
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
    button: "Read Article",
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
const MorePosts = () => {
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
    <div className="w-full flex flex-col md:pb-[180px] pb-[10px] pt-10 text-[#1E1E1E] font-DMSans bg-white">
      <h1 className="w-full text-center underline font-DarkerGrotesque font-semibold text-5xl ">
        Explore More Posts
      </h1>
      <div className="w-full mt-[160px] flex justify-center border-b border-[#1E1E1E33] border-solid px-6 pb-5 ">
        <h1 className="font-DarkerGrotesque w-full max-w-[1200px] text-[#1E1E1E80] text-[32px] text-start font-semibold ">
          Events Reports
        </h1>
      </div>
      <div
        ref={scrollRef}
        className=" mt-5  relative w-full overflow-x-scroll hideScrollbar "
      >
        <div className="flex pl-10 md:pl-[150px] pr-10 min-w-max gap-10">
          {blogDets.map((blog, index) => (
            <BlogCard key={index} {...blog} rightArrow={true} />
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

export default MorePosts;
