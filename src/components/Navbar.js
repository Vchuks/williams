import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    return setNav(!nav);
  };
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <>
      <div className="hidden md:flex justify-between font-semibold text-xl items-center">
        <div className="flex md:gap-6 lg:gap-14">
          <NavLink to="#" style={navStyle}>
            Product
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Pricing
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Support
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Contact
          </NavLink>
        </div>
        <div className="flex md:gap-3 lg:gap-10 items-center">
          <NavLink to="#" style={navStyle}>
            Sign Up
          </NavLink>
          <NavLink
            to="#"
            style={navStyle}
            className="bg-gradient-to-r from-will1 to-will2 px-4 lg:px-8 py-2 rounded-lg"
          >
            Login
          </NavLink>
        </div>
      </div>
      <div
        className="flex float-right md:hidden relative"
        onClick={handleClick}
      >
        <div className="space-y-2">
          <span className="block w-8 h-1 bg-will2"></span>
          <span className="block w-8 h-1 bg-will2"></span>
          <span className="block w-8 h-1 bg-will2"></span>
        </div>
      </div>
      {nav ? <Sidebar /> : null}
    </>
  );
};

export default Navbar;
