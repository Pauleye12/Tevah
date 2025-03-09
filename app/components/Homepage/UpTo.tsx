import BlogCard from "../BlogCard";
const blogDets = [
  {
    img: "./learn1.webp",
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
  return (
    <div className="w-full font-DMSans bg-[#FFFFFF] pb-[250px] flex items-center flex-col gap-20 ">
      <div className="flex flex-col px-5 pt-[50px] max-w-[1100px] w-full items-start justify-start ">
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
      <div className="  relative w-full overflow-x-scroll hideScrollbar ">
        <div className="flex pl-[150px] pr-10 min-w-max gap-10">
          {blogDets.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpTo;
