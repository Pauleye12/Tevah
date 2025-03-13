import { Link } from "react-router";
import Dropdown from "./SVGs/Dropdown";

const MobileNav = ({ setDonate }: { setDonate: (donate: boolean) => void }) => {
  return (
    <div className="bg-white md:hidden absolute pb-12 top-[100%] px-9 pt-6 left-0 w-full z-50">
      <div className="flex w-full flex-col bg-white items-center justify-center text-xl font-medium font-DMSans text-[#1E1E1E] ">
        <Link
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/ "
        >
          Home
        </Link>
        <Link
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/about"
        >
          About
        </Link>
        <Link
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/initiatives"
        >
          Initiatives
        </Link>
        <Link
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/blogs"
        >
          Blogs
        </Link>
        <Link className="py-7 w-full " to="/contact">
          Contact
        </Link>
        <div className="flex flex-col-reverse mt-4 items-start w-full gap-3">
          <button
            className="btn-link w-full cursor-pointer "
            onClick={() => setDonate(true)}
          >
            Donate Now
          </button>
          <button className="flex gap-1.5 items-center ">
            <span className="font-bold text-[#1E1E1E] ">EN</span> <Dropdown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
