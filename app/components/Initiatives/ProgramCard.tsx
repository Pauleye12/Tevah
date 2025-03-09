import React from "react";
import RightArrow from "../SVGs/RightArrow";

const ProgramCard = ({
  icon,
  title,
  description,
  button,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  button: string;
}) => {
  return (
    <div className="flex w-[430px] bg-white hover:bg-[#E24700] hover:text-white rounded-xl cursor-pointer h-[312px] justify-between overflow-hidden border-[#1E1E1E]  hover:border-white px-6  flex-col items-start py-9 gap-5 text-[#1E1E1E] ">
      <div>{icon}</div>
      <h1 className="font-bold font-DarkerGrotesque text-[24px]">{title}</h1>
      <p className="font-DMSans">{description}</p>
      <button className="  w-fit flex items-center gap-2 border border-solid  py-3 pl-3 pr-11 rounded-lg ">
        {button} <RightArrow />{" "}
      </button>
    </div>
  );
};

export default ProgramCard;
