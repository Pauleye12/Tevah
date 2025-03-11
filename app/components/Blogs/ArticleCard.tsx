import { Link } from "react-router";
import { RightArrow } from "../SVGs/RightArrow";

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

        <Link
          to={`/blog/${blogId}`}
          className=" text-[#1E1E1E] w-fit flex items-center gap-2 border border-solid border-[#1E1E1E] py-3 pl-3 pr-11 rounded-lg "
        >
          Read Article <RightArrow />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
