import BlogCard from "../../BlogCard";

const blogDets = [
  {
    img: "/learn1.webp",
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
    img: "/strength.webp",
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
    img: "/change.webp",
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
    img: "/run.webp",
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
const RelatedArticle = () => {
  return (
    <div className="flex mt-[200px] items-center px-6 justify-center bg-white gap-4">
      <div className="max-w-[1200px] flex-col flex items-center justify-center gap-9  ">
        <h1 className="text-[#1E1E1E] font-DarkerGrotesque text-[32px] text-center w-full font-bold">
          Related Articles
        </h1>
        <div className=" mt-5 relative w-full overflow-x-scroll hideScrollbar ">
          <div className="flex pl-[150px] pr-10 min-w-max gap-10">
            {blogDets.map((blog, index) => (
              <BlogCard key={index} {...blog} rightArrow={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticle;
