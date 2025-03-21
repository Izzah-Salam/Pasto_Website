import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 sm:px-10 px-5">
      <div className="text-white md:text-2xl italic text-xl">
        P<i class="ri-compasses-2-line text-[#C3DE2E]"></i>sto
      </div>
      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white px-2 py-1 text-sm md:text-[16px] ${
              isActive ? "border-b-2 border-[#C3DE2E] font-bold" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            `text-white px-2 py-1 text-sm md:text-[16px] ${
              isActive ? "border-b-2 border-[#C3DE2E] font-bold" : ""
            }`
          }
        >
          All Pastes
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
