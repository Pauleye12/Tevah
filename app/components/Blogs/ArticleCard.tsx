import { Link } from "react-router";
import { RightArrow } from "../SVGs/RightArrow";
import { Facebook, Instagram, LinkedIn, Twitter } from "../SVGs/Socials";
import { useState } from "react";
import RightArrowOrange from "../SVGs/RightArrowOrange";
const ArticleCard = ({
  img,
  blogId,
  title,
  date,
  description,
}: {
  img: string;
  blogId: string;
  title: string;
  date: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="flex w-[360px] font-DMSans cursor-pointer  overflow-hidden flex-col items-center gap-6 ">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex mt-4 flex-col h-full gap-8 justify-between ">
        <div className="flex flex-col text-[#404040] items-start gap-2 ">
          <h1 className="font-semibold  text-xl ">{title}</h1>
          <p className="text-sm">posted on {date}</p>
        </div>
        <div className="h-full flex items-start">
          <p className=" text-[#1E1E1E]">{description}</p>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full flex justify-between gap-3 items-center "
        >
          <Link
            to={`/blog/${blogId}`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className=" text-[#1E1E1E] w-fit flex items-center gap-2 border border-solid hover:border-[#E24700] hover:text-[#E24700] border-[#1E1E1E] py-3 px-3 rounded-lg "
          >
            Read Article{" "}
            {isHovered2 ? <RightArrow color="#E24700" /> : <RightArrow />}
          </Link>
          <div
            className={` flex justify-center gap-3 ${
              isHovered ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <a
              className=" flex items-center justify-center "
              href=""
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              className=" flex items-center justify-center "
              href=""
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              className=" flex items-center justify-center "
              href=""
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className=" flex items-center justify-center "
              href=""
              target="_blank"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
