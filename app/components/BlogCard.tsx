const BlogCard = ({
  img,
  title,
  location,
  date,
  description,
  button,
  category,
}: {
  img: string;
  title: string;
  location: string;
  date: string;
  description: string;
  button: string;
  category: string;
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
        <button className=" text-[#1E1E1E] w-fit  border border-solid border-[#1E1E1E] py-3 pl-3 pr-11 rounded-lg ">
          {button}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
