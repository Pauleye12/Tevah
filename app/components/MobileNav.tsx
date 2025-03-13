import { Link } from "react-router";
import Dropdown from "./SVGs/Dropdown";

const MobileNav = ({
  setDonate,
  setIsMobileNavOpen,
}: {
  setDonate: (donate: boolean) => void;
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
}) => {
  return (
    <div className="bg-white md:hidden absolute pb-12 top-[100%] px-9 pt-6 left-0 w-full z-50">
      <div className="flex w-full flex-col bg-white items-center justify-center text-xl font-medium font-DMSans text-[#1E1E1E] ">
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/initiatives"
        >
          Initiatives
        </Link>
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          className="py-7 border-b w-full border-solid border-[#1E1E1E33] "
          to="/blog"
        >
          Blogs
        </Link>
        <Link
          onClick={() => setIsMobileNavOpen(false)}
          className="py-7 w-full "
          to="/contact"
        >
          Contact
        </Link>
        <div className="flex flex-col-reverse mt-4 items-start w-full gap-3">
          <button
            className="btn-link w-full cursor-pointer "
            onClick={() => {
              setDonate(true);
              setIsMobileNavOpen(false);
            }}
          >
            Donate Now
          </button>
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="flex gap-1.5 items-center "
          >
            <span className="font-bold text-[#1E1E1E] ">EN</span> <Dropdown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
