import { Link, NavLink } from "react-router";
import Dropdown from "./SVGs/Dropdown";

const Navbar = () => {
  return (
    <header className="bg-white fixed border-b border-[#D4D4D4] border-solid py-2 top-0 z-50 w-full left-0 flex justify-center items-center ">
      <div className="max-w-6xl w-full bg-transparent flex justify-between items-center ">
        <Link to="/">
          <img className="max-w-[150px] w-full " src="./logo.webp" alt="" />
        </Link>
        <div className="flex gap-4 items-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#E24700] font-medium px-2 py-1 "
                : "text-[#1E1E1ECC] font-medium px-2 py-1 "
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#E24700] font-medium px-2 py-1 "
                : "text-[#1E1E1ECC] font-medium px-2 py-1 "
            }
            to="/initiatives"
          >
            Initiatives
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#E24700] font-medium px-2 py-1 "
                : "text-[#1E1E1ECC] font-medium px-2 py-1 "
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#E24700] font-medium px-2 py-1 "
                : "text-[#1E1E1ECC] font-medium px-2 py-1 "
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <div className="flex items-center gap-3">
            <Link className="btn-link" to="">
              Donate Now
            </Link>
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
