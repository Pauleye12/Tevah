import { Link } from "react-router";
import { RightArrow } from "./SVGs/RightArrow";

const BlogCard = ({
  img,
  blogId,
  title,
  location,
  date,
  description,
  button,
  category,
  rightArrow = false,
}: {
  img: string;
  blogId: string;
  title: string;
  location: string;
  date: string;
  description: string;
  button: string;
  category: string;
  rightArrow?: boolean;
}) => {
  return (
    <div className="flex w-[325px] cursor-pointer  overflow-hidden flex-col items-center gap-5 ">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col h-full gap-8 justify-between ">
        <div className="flex justify-between text-[#404040] items-center gap-3 ">
          <button className="font-semibold py-2 px-3 text-sm rounded-lg border border-solid border-[#404040] ">
            {category}
          </button>
          <p className="text-sm">
            {location} | {date}
          </p>
        </div>
        <div className="text-[#1E1E1E] flex flex-col gap-5 ">
          <h1 className="font-semibold text-xl ">{title}</h1>
          <p className=" ">{description}</p>
        </div>
        <Link
          to={`/blog/${blogId}`}
          className=" text-[#1E1E1E] w-fit flex gap-2 border border-solid border-[#1E1E1E] py-3 px-3  rounded-lg "
        >
          {button} {rightArrow && <RightArrow />}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
