import React from "react";

const SecondCard = ({ item }) => {
  const { title, body, image } = item;
  return (
    <div className="w-11/12 p-2 pt-16 mx-2 rounded-xl text-center bg-white shadow-md shadow-slate-200 relative mt-8 md:mt-0">
      <img src={image} className="absolute -top-6 left-1/3" />
      <h3>{title}</h3>
      <ul className="py-4 px-4 text-sm leading-7">
        <li>{body[0]}</li>
        <li>{body[1]}</li>
        <li>{body[2]}</li>
      </ul>
    </div>
  );
};

export default SecondCard;
