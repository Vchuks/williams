import React from "react";
import pix3 from "../images/nyii2.jpg";

const Clients = ({ image, name, company, comment }) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl">
      <div className="w-2/4">
        <img
          src={image}
          alt="people"
          width={116}
          height={114}
          className=" rounded-tl-none rounded-full"
        />
      </div>
      <div className="w-full">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-400">{company}</p>
        <p className="text-sm font-bold text-gray-600 mt-2">"{comment}"</p>
      </div>
    </div>
  );
};

export default Clients;
