import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="flex bg-white items-center px-8 lg:px-14 py-6 shadow-md shadow-neutral-100">
        <div className=" font-bold text-transparent text-xl md:text-3xl bg-clip-text bg-gradient-to-r from-will1 to-will2 mr-auto">
          WILLIAMS
        </div>
        <div className="w-9/12">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
