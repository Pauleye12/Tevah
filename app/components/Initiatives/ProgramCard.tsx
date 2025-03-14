import { useState } from "react";
import { RightArrow, RightArrowWhite } from "../SVGs/RightArrow";
import { Books, Mentorship, Scholarship } from "../SVGs/ProgramSVGs";

const ProgramCard = ({
  icon,
  title,
  description,
  button,
}: {
  icon: string;
  title: string;
  description: string;
  button: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex w-[315px] md:w-[430px] bg-white hover:bg-[#E24700] hover:text-white rounded-xl cursor-pointer md:h-[312px] justify-between overflow-hidden border-[#1E1E1E]  hover:border-white px-6  flex-col items-start py-9 gap-5 text-[#1E1E1E] "
    >
      <div>
        {icon === "scholarship" ? (
          <Scholarship fill={isHovered ? "#fff" : "#1E1E1E"} />
        ) : icon === "mentorship" ? (
          <Mentorship fill={isHovered ? "#fff" : "#1E1E1E"} />
        ) : (
          <Books fill={isHovered ? "#fff" : "#1E1E1E"} />
        )}
      </div>
      <h1 className="font-bold font-DarkerGrotesque text-[24px]">{title}</h1>
      <p className="font-DMSans">{description}</p>
      <button className="  w-fit flex items-center gap-1 border border-solid px-2  py-3 md:px-3 md:pr-11 rounded-lg ">
        {button}
        {isHovered ? <RightArrowWhite /> : <RightArrow />}
      </button>
    </div>
  );
};

export default ProgramCard;
