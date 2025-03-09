import { Books, Mentorship, Scholarship } from "../SVGs/ProgramSVGs";
import ProgramCard from "./ProgramCard";
const programDets = [
  {
    icon: <Scholarship />,
    title: "Scholarship & Financial Aid Program",
    description:
      "We provide scholarships, tuition assistance, and school supplies to ensure financial barriers don’t limit a student’s potential.",
    button: "Donate to Support a Student",
  },
  {
    icon: <Mentorship />,
    title: "Mentorship & Career Guidance",
    description:
      "Students connect with experienced mentors for academic support, career advice, and essential life skills to help them navigate their future.",
    button: "Become a Mentor",
  },
  {
    icon: <Books />,
    title: "Books & Learning Resources Drive",
    description:
      "We provide books, learning materials, and organize reading sessions to promote literacy and education in underserved communities.",
    button: "Donate Books",
  },
  {
    icon: <Scholarship />,
    title: "Scholarship & Financial Aid Program",
    description:
      "We provide scholarships, tuition assistance, and school supplies to ensure financial barriers don’t limit a student’s potential.",
    button: "Donate to Support a Student",
  },
  {
    icon: <Mentorship />,
    title: "Mentorship & Career Guidance",
    description:
      "Students connect with experienced mentors for academic support, career advice, and essential life skills to help them navigate their future.",
    button: "Become a Mentor",
  },
  {
    icon: <Books />,
    title: "Books & Learning Resources Drive",
    description:
      "We provide books, learning materials, and organize reading sessions to promote literacy and education in underserved communities.",
    button: "Donate Books",
  },
];
const KeyProgram = () => {
  return (
    <div className="bg-[#F8F8FA] w-full min-h-screen py-[52px] flex justify-center flex-col items-center gap-9 ">
      <div className="w-full max-w-[1100px] px-7 flex justify-start ">
        <h1 className="font-DarkerGrotesque text-[48px] font-semibold text-[#1E1E1E] max-w-[280px] w-full ">
          Key Programs & Initiatives
        </h1>
      </div>
      <div className="  relative w-full overflow-x-scroll hideScrollbar ">
        <div className="flex pl-[150px] pr-10 min-w-max gap-10">
          {programDets.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyProgram;
