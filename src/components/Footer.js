import React from "react";
import FooterCard from "./FooterCard";
import Footerlist from "./Footerlist";
import nav from "../images/nav.svg";

const Footer = () => {
  const foot = Footerlist.map((list) => (
    <FooterCard key={list.title} list={list} />
  ));

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="text-xl font-sans font-medium">Williams</p>
          <p className="my-4">
            Worldwide project management app since 2020. We sell over 1000+
            branded products on our website
          </p>
          <p>www.williams.com</p>
        </div>
        <div className="flex justify-between md:justify-around w-4/5 mt-6 md:mt-0">
          {foot}
        </div>
        <div className="w-2/4 md:px-8 relative mt-4 md:mt-0">
          <p className="font-bold text-lg">Stay Updated</p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-56 bg-slate-200 p-2 rounded-md my-4 "
          />

          <div className="w-8 h-10 bg-gradient-to-r from-will1 to-will2 absolute -right-20 md:right-20 top-11 rounded-tr-md rounded-br-md">
            <img src={nav} alt="arrow" className="m-auto mt-2 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
