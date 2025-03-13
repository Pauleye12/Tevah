import { Link, NavLink } from "react-router";
import Dropdown from "./SVGs/Dropdown";
import { MenuIcon } from "./SVGs/RightArrow";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = ({ setDonate }: { setDonate: (donate: boolean) => void }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="bg-white fixed border-b border-[#D4D4D4] border-solid py-2 font-DMSans top-0 z-50 w-full left-0 flex justify-center items-center ">
      <div className="max-w-[1200px] w-full bg-transparent flex justify-between items-center px-5">
        <Link to="/">
          <img className="max-w-[150px] w-full " src="/logo.webp" alt="" />
        </Link>

        {/* Mobile Navbar */}
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="flex md:hidden gap-4 cursor-pointer items-center"
        >
          <MenuIcon />
        </button>

        {/* Mobile Navbar */}
        {isMobileNavOpen && (
          <MobileNav
            setIsMobileNavOpen={setIsMobileNavOpen}
            setDonate={setDonate}
          />
        )}

        {/* Desktop Navbar */}
        <div className=" hidden md:flex gap-4 items-center">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-[#E24700]" : "text-[#1E1E1ECC]"
              } font-medium px-2 py-1 relative before:content-[url('/Underline.svg')] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:opacity-0 before:scale-50 before:transition-opacity before:duration-300 hover:before:opacity-100 transition-all duration-300 hover:before:scale-100 hover:font-semibold hover:text-[#1e1e1e] `
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-[#E24700]" : "text-[#1E1E1ECC]"
              } font-medium px-2 py-1 relative before:content-[url('/Underline.svg')] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:opacity-0 before:scale-50 before:transition-opacity before:duration-300 hover:before:opacity-100 tran hover:before:scale-100 hover:font-semibold hover:text-[#1e1e1e] `
            }
            to="/initiatives"
          >
            Initiatives
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-[#E24700]" : "text-[#1E1E1ECC]"
              } font-medium px-2 py-1 relative before:content-[url('/Underline.svg')] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:opacity-0 before:scale-50 before:transition-opacity before:duration-300 hover:before:opacity-100 tran hover:before:scale-100 hover:font-semibold hover:text-[#1e1e1e] `
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-[#E24700]" : "text-[#1E1E1ECC]"
              } font-medium px-2 py-1 relative before:content-[url('/Underline.svg')] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:opacity-0 before:scale-50 before:transition-opacity before:duration-300 hover:before:opacity-100 tran hover:before:scale-100 hover:font-semibold hover:text-[#1e1e1e] `
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <div className="flex items-center gap-3">
            <button
              className="btn-link cursor-pointer "
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
    </header>
  );
};

export default Navbar;
