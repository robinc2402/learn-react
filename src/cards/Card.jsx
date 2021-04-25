import React from "react";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

const Card = (props) => {
  return (
    <div className="card">
      <CardImage imgsrc={props.imgsrc} />
      <CardInfo sname={props.sname} title={props.title} link={props.link} />
    </div>
  );
};

export default Card;
