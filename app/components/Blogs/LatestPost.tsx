import React from "react";
import ArticleCard from "./ArticleCard";

const posts = [
  {
    img: "/Article1.webp",
    blogId: "1",
    title: "Empowering Futures: How Scholarships Are Changing Lives",
    date: "March 5, 2025",
    description:
      "Education opens doors, but for many, financial barriers stand in the way. Discover how our scholarship recipients are overcoming obstacles, achieving their dreams, and creating brighter futures for themselves and their communities.",
  },
  {
    img: "/article2.webp",
    blogId: "2",
    title: "From Classrooms to Communities: The Power of Volunteerism",
    date: "February 20, 2025",
    description:
      "Volunteers are the heart of our mission! Learn how their dedication is making a difference in schools, mentoring programs, and community outreach efforts—one act of kindness at a time.",
  },
  {
    img: "/article3.webp",
    blogId: "3",
    title: "Bridging the Gap: Technology and Education in Underserved Areas",
    date: "January 15, 2025",
    description:
      "Bridging the Gap: Technology and Education in Underserved Areas",
  },
  {
    img: "/article4.webp",
    blogId: "4",
    title: "Small Acts, Big Impact: How Donations Change Lives",
    date: "December 10, 2024",
    description:
      "Every donation—big or small—creates ripples of change. See how contributions from supporters like you are funding scholarships, building classrooms, and empowering young minds.",
  },
  {
    img: "/article5.webp",
    blogId: "5",
    title:
      "A Teacher’s Perspective: The Challenges and Triumphs of Education Today",
    date: "November 22, 2024",
    description:
      "Teachers are shaping the future every day. Hear from educators about the challenges they face, the victories they celebrate, and what keeps them motivated.",
  },
  {
    img: "/article6.webp",
    blogId: "6",
    title: "Beyond the Books: Life Skills Every Student Should Learn",
    date: "October 5, 2024",
    description:
      "Education goes beyond textbooks! From financial literacy to emotional intelligence, discover essential life skills that help students succeed in the real world.",
  },
];
const LatestPost = () => {
  return (
    <div className="pt-[180px] bg-white w-full pb-10 flex flex-col justify-center items-center font-DMSans ">
      <div className="w-full flex justify-center border-b border-[#1E1E1E33] border-solid px-6 pb-5 ">
        <h1 className="font-DarkerGrotesque px-6  w-full max-w-[1200px] text-[#1E1E1E80] text-[32px] text-start font-semibold ">
          Latest Post
        </h1>
      </div>
      <div className="w-full mt-5 max-w-[1200px] flex flex-wrap justify-around gap-6 gap-y-16 px-6 pb-5 ">
        {posts.map((post, index) => (
          <ArticleCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
