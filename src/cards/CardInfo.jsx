import React from "react";
import CardHeading from "./CardHeading";
import CardCategory from "./CardCategory";
import CardLink from "./CardLink";

const CardInfo = (props) => {
  return (
    <div className="card__info">
      <CardCategory sname={props.sname} />
      <CardHeading title={props.title} />
      <CardLink link={props.link} />
    </div>
  );
};

export default CardInfo;
