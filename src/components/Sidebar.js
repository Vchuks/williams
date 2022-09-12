import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div>
      <div className="block md:hidden bg-green-50 w-2/4 h-screen p-4 text-lg absolute right-0 top-20">
        <NavLink to="#" style={navStyle} className="block mb-2">
          Product
        </NavLink>
        <NavLink to="#" style={navStyle} className="block mb-2">
          Pricing
        </NavLink>
        <NavLink to="#" style={navStyle} className="block mb-2">
          Support
        </NavLink>
        <NavLink to="#" style={navStyle} className="block mb-2">
          Contact
        </NavLink>
        <NavLink to="#" style={navStyle} className="block mb-4">
          Sign Up
        </NavLink>
        <NavLink
          to="#"
          style={navStyle}
          className="bg-gradient-to-r from-will1 to-will2 px-4 py-2 rounded-lg"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
