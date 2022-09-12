import React from "react";

const FooterCard = ({ list }) => {
  const { title, content } = list;
  const newCont = content.map((cont) => (
    <li key={cont.name} className="list-none my-2">
      {cont["name"]}
    </li>
  ));
  return (
    <div>
      <p className="font-bold text-lg">{title}</p>
      <ul className="my-4">{newCont}</ul>
    </div>
  );
};

export default FooterCard;
